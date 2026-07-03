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
  part: "snippet,statistics",
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
const data = {
  channelHandle: normalizedHandle,
  channelUrl: `https://www.youtube.com/${normalizedHandle}`,
  channelId: channel.id,
  title: channel.snippet?.title || "",
  subscriberCount: toNumber(stats.subscriberCount),
  viewCount: toNumber(stats.viewCount),
  videoCount: toNumber(stats.videoCount),
  hiddenSubscriberCount: Boolean(stats.hiddenSubscriberCount),
  updatedAt: new Date().toISOString(),
  source: "YouTube Data API v3",
};

await mkdir("data", { recursive: true });
await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");

console.log(
  `Updated ${outputPath}: ${data.title} (${data.subscriberCount ?? "hidden"} subscribers, ${data.viewCount} views, ${data.videoCount} videos)`
);
