import assert from "node:assert/strict";
import test from "node:test";

import {
  getBestThumbnail,
  isStandardPublicVideo,
  parseYouTubeDuration,
} from "./youtube-video-filter.mjs";

function video(overrides = {}) {
  return {
    status: { privacyStatus: "public", uploadStatus: "processed" },
    snippet: { liveBroadcastContent: "none" },
    contentDetails: { duration: "PT8M15S" },
    ...overrides,
  };
}

test("parses YouTube ISO durations", () => {
  assert.equal(parseYouTubeDuration("PT8M15S"), 495);
  assert.equal(parseYouTubeDuration("PT1H2M3S"), 3723);
  assert.equal(parseYouTubeDuration("invalid"), null);
});

test("keeps normal public videos", () => {
  assert.equal(isStandardPublicVideo(video()), true);
});

test("excludes Shorts-length uploads", () => {
  assert.equal(
    isStandardPublicVideo(video({ contentDetails: { duration: "PT3M" } })),
    false,
  );
  assert.equal(
    isStandardPublicVideo(video({ contentDetails: { duration: "PT42S" } })),
    false,
  );
});

test("excludes livestreams and replays", () => {
  assert.equal(
    isStandardPublicVideo(
      video({
        liveStreamingDetails: {
          actualStartTime: "2026-07-01T00:00:00Z",
          actualEndTime: "2026-07-01T02:00:00Z",
        },
      }),
    ),
    false,
  );
  assert.equal(
    isStandardPublicVideo(
      video({ snippet: { liveBroadcastContent: "live" } }),
    ),
    false,
  );
});

test("excludes non-public or unprocessed uploads", () => {
  assert.equal(
    isStandardPublicVideo(video({ status: { privacyStatus: "private" } })),
    false,
  );
  assert.equal(
    isStandardPublicVideo(
      video({ status: { privacyStatus: "public", uploadStatus: "uploaded" } }),
    ),
    false,
  );
});

test("chooses the highest quality available thumbnail", () => {
  assert.equal(
    getBestThumbnail({
      thumbnails: {
        default: { url: "default.jpg" },
        high: { url: "high.jpg" },
      },
    }),
    "high.jpg",
  );
});
