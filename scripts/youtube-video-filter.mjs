const SHORTS_MAX_SECONDS = 180;

export function parseYouTubeDuration(value) {
  const match = String(value || "").match(
    /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,
  );
  if (!match) return null;

  const [, hours = "0", minutes = "0", seconds = "0"] = match;
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

export function isStandardPublicVideo(video) {
  if (!video || video.status?.privacyStatus !== "public") return false;
  if (video.status?.uploadStatus && video.status.uploadStatus !== "processed") return false;
  if (video.snippet?.liveBroadcastContent && video.snippet.liveBroadcastContent !== "none") return false;
  if (video.liveStreamingDetails) return false;

  const durationSeconds = parseYouTubeDuration(video.contentDetails?.duration);
  return Number.isFinite(durationSeconds) && durationSeconds > SHORTS_MAX_SECONDS;
}

export function getBestThumbnail(snippet) {
  const thumbnails = snippet?.thumbnails || {};
  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    ""
  );
}
