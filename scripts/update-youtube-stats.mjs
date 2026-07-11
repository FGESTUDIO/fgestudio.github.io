import { mkdir, writeFile } from "node:fs/promises";

const apiKey = process.env.YOUTUBE_API_KEY;
const channelHandle = process.env.CHANNEL_HANDLE || "@yinsi_gaming";
const outputPath = "data/youtube-stats.json";

if (!apiKey) {
  throw new Error("Missing YOUTUBE_API_KEY. Add it as a GitHub repository secret.");
}

const normalizedHandle = channelHandle.startsWith("@") ? channelHandle : `@${channelHandle}`;
const endpoint = new URL("https://www.googleapis.com/youtube/v3/channels");

endpoint.search = new URLSearchParams({
  part: "snippet,statistics,contentDetails",
  forHandle: normalizedHandle,
  key: apiKey,
}).toString();

const response = await fetch(endpoint);
const payload = await response.json();

if (!response.ok) {
  const message = payload?.error?.message || `YouTube API request failed with ${response.status}`;
  throw new Error(message);
}

const channel = payload.items?.[0];

if (!channel) {
  throw new Error(`No YouTube channel found for handle ${normalizedHandle}.`);
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

const stats = channel.statistics || {};
const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;
let videos = [];

if (uploadsPlaylistId) {
  const videosEndpoint = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  videosEndpoint.search = new URLSearchParams({
    part: "snippet,contentDetails",
    playlistId: uploadsPlaylistId,
    maxResults: "3",
    key: apiKey,
  }).toString();

  const videosResponse = await fetch(videosEndpoint);
  const videosPayload = await videosResponse.json();

  if (!videosResponse.ok) {
    const message = videosPayload?.error?.message || `YouTube video request failed with ${videosResponse.status}`;
    throw new Error(message);
  }

  const playlistItems = videosPayload.items || [];
  const videoIds = playlistItems.map((item) => item.contentDetails?.videoId).filter(Boolean);

  if (videoIds.length) {
    const detailsEndpoint = new URL("https://www.googleapis.com/youtube/v3/videos");
    detailsEndpoint.search = new URLSearchParams({
      part: "snippet,status",
      id: videoIds.join(","),
      key: apiKey,
    }).toString();

    const detailsResponse = await fetch(detailsEndpoint);
    const detailsPayload = await detailsResponse.json();

    if (!detailsResponse.ok) {
      const message = detailsPayload?.error?.message || `YouTube video details request failed with ${detailsResponse.status}`;
      throw new Error(message);
    }

    const publicVideos = new Map(
      (detailsPayload.items || [])
        .filter((video) => video.status?.privacyStatus === "public")
        .map((video) => [video.id, video])
    );

    videos = playlistItems
      .map((item) => {
        const videoId = item.contentDetails?.videoId;
        const video = publicVideos.get(videoId);
        const snippet = video?.snippet || {};
        const thumbnails = snippet.thumbnails || {};
        const thumbnail = thumbnails.maxres?.url || thumbnails.standard?.url || thumbnails.high?.url || thumbnails.medium?.url || thumbnails.default?.url || "";

        if (!videoId || !snippet.title || !thumbnail) return null;

        return {
          id: videoId,
          title: snippet.title,
          thumbnail,
          url: `https://www.youtube.com/watch?v=${videoId}`,
          publishedAt: snippet.publishedAt || item.contentDetails?.videoPublishedAt || "",
        };
      })
      .filter(Boolean);
  }
}

const data = {
  channelHandle: normalizedHandle,
  channelUrl: `https://www.youtube.com/${normalizedHandle}`,
  channelId: channel.id,
  title: channel.snippet?.title || "",
  subscriberCount: toNumber(stats.subscriberCount),
  viewCount: toNumber(stats.viewCount),
  videoCount: toNumber(stats.videoCount),
  hiddenSubscriberCount: Boolean(stats.hiddenSubscriberCount),
  videos,
  updatedAt: new Date().toISOString(),
  source: "YouTube Data API v3",
};

await mkdir("data", { recursive: true });
await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");

console.log(
  `Updated ${outputPath}: ${data.title} (${data.subscriberCount ?? "hidden"} subscribers, ${data.viewCount} views, ${data.videoCount} videos)`
);
