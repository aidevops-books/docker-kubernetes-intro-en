const express = require("express");
const { createClient } = require("redis");

const app = express();
const PORT = process.env.PORT || 3000;
const REDIS_HOST = process.env.REDIS_HOST || "localhost";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
  disableOfflineQueue: true,
  socket: { connectTimeout: 2000 }
});
redisClient.on("error", (err) => console.error("Redis Client Error", err.message));
// Connect once in the background; requests observe readiness.
redisClient.connect().catch((err) => console.error("Redis connect failed", err.message));

app.get("/", (req, res) => {
  res.json({ message: "Docker & Kubernetes: A Practical Introduction API", redisHost: REDIS_HOST });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/ready", (req, res) => {
  res.status(redisClient.isReady ? 200 : 503).json({ ready: redisClient.isReady });
});

app.get("/api/count", async (req, res) => {
  try {
    if (!redisClient.isReady) {
      return res.status(503).json({ error: "Redis is not ready" });
    }
    const count = await redisClient.incr("visit-count");
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Redis command failed", detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT} (REDIS_HOST=${REDIS_HOST})`);
});
