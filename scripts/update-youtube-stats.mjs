import { mkdir, writeFile } from "node:fs/promises";

import {
  getBestThumbnail,
  isStandardPublicVideo,
  parseYouTubeDuration,
} from "./youtube-video-filter.mjs";

const apiKey = process.env.YOUTUBE_API_KEY;
const channelHandle = process.env.CHANNEL_HANDLE || "@yinsi_gaming";
const outputPath = "data/youtube-stats.json";
const thumbnailDirectory = "images/creators/youtube";
const requiredVideoCount = 3;
const maxPlaylistPages = 4;

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

async function getJson(url, requestLabel) {
  const apiResponse = await fetch(url);
  const apiPayload = await apiResponse.json();
  if (!apiResponse.ok) {
    const message =
      apiPayload?.error?.message ||
      `${requestLabel} failed with ${apiResponse.status}`;
    throw new Error(message);
  }
  return apiPayload;
}

async function localizeThumbnail(video) {
  try {
    const thumbnailResponse = await fetch(video.sourceThumbnail);
    if (!thumbnailResponse.ok) {
      throw new Error(`HTTP ${thumbnailResponse.status}`);
    }

    const contentType = thumbnailResponse.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) {
      throw new Error(`unexpected content type ${contentType || "unknown"}`);
    }

    const relativePath = `${thumbnailDirectory}/${video.id}.jpg`;
    await writeFile(
      relativePath,
      Buffer.from(await thumbnailResponse.arrayBuffer()),
    );
    return { ...video, thumbnail: `/${relativePath}` };
  } catch (error) {
    console.warn(
      `Could not save thumbnail for ${video.id}; keeping the YouTube URL: ${error.message}`,
    );
    return { ...video, thumbnail: video.sourceThumbnail };
  }
}

if (uploadsPlaylistId) {
  const videosEndpoint = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  let nextPageToken = "";
  const selectedVideos = [];

  for (
    let page = 0;
    page < maxPlaylistPages && selectedVideos.length < requiredVideoCount;
    page += 1
  ) {
    videosEndpoint.search = new URLSearchParams({
      part: "snippet,contentDetails",
      playlistId: uploadsPlaylistId,
      maxResults: "50",
      ...(nextPageToken ? { pageToken: nextPageToken } : {}),
      key: apiKey,
    }).toString();

    const videosPayload = await getJson(
      videosEndpoint,
      "YouTube playlist request",
    );
    const playlistItems = videosPayload.items || [];
    const videoIds = playlistItems
      .map((item) => item.contentDetails?.videoId)
      .filter(Boolean);

    if (!videoIds.length) break;

    const detailsEndpoint = new URL("https://www.googleapis.com/youtube/v3/videos");
    detailsEndpoint.search = new URLSearchParams({
      part: "snippet,status,contentDetails,liveStreamingDetails",
      id: videoIds.join(","),
      key: apiKey,
    }).toString();

    const detailsPayload = await getJson(
      detailsEndpoint,
      "YouTube video details request",
    );
    const standardVideos = new Map(
      (detailsPayload.items || [])
        .filter(isStandardPublicVideo)
        .map((video) => [video.id, video])
    );

    for (const item of playlistItems) {
      const videoId = item.contentDetails?.videoId;
      const video = standardVideos.get(videoId);
      const snippet = video?.snippet || {};
      const sourceThumbnail = getBestThumbnail(snippet);
      if (!videoId || !snippet.title || !sourceThumbnail) continue;

      selectedVideos.push({
        id: videoId,
        title: snippet.title,
        sourceThumbnail,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        publishedAt: snippet.publishedAt || item.contentDetails?.videoPublishedAt || "",
        durationSeconds: parseYouTubeDuration(video.contentDetails?.duration),
        kind: "standard",
      });
      if (selectedVideos.length >= requiredVideoCount) break;
    }

    nextPageToken = videosPayload.nextPageToken || "";
    if (!nextPageToken) break;
  }

  await mkdir(thumbnailDirectory, { recursive: true });
  videos = await Promise.all(
    selectedVideos.slice(0, requiredVideoCount).map(localizeThumbnail),
  );
  videos = videos.map(({ sourceThumbnail, ...video }) => video);
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
