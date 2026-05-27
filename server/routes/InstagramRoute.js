import express from "express";
import axios from "axios";
import NodeCache from "node-cache";

const instagramRoute = express.Router();
const cache = new NodeCache({ stdTTL: 7200 });

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;

instagramRoute.get("/", async (req, res) => {
  const cached = cache.get("insta_posts");
  if (cached) return res.json(cached);

  try {
    let allPosts = [];
    let url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=25&access_token=${INSTAGRAM_TOKEN}`;

    for (let i = 0; i < 4; i++) {
      const response = await axios.get(url);
      const posts = response.data.data || [];
      allPosts = [...allPosts, ...posts];

      if (response.data.paging && response.data.paging.next) {
        url = response.data.paging.next;
      } else {
        break;
      }
    }

    cache.set("insta_posts", allPosts);
    res.json(allPosts);
  } catch (err) {
    console.error("Instagram API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch Instagram posts" });
  }
});

instagramRoute.get("/proxy", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "URL parameter is required" });
    }

    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      return res.status(400).json({ error: "Invalid URL" });
    }
    const isAllowedHost = (host) => {
      if (!host) return false;
      const h = host.toLowerCase();
      return (
        h === "video.cdninstagram.com" ||
        h.endsWith(".cdninstagram.com") ||
        h.endsWith(".fbcdn.net")
      );
    };

    if (parsed.protocol !== "https:" || !isAllowedHost(parsed.hostname)) {
      return res.status(400).json({ error: "Host not allowed" });
    }

    const range = req.headers.range;

    const upstream = await axios.get(url, {
      responseType: "stream",
      timeout: 20000,
      maxRedirects: 5,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "*/*",
        ...(range ? { Range: range } : {}),
      },
      validateStatus: (s) => s >= 200 && s < 400,
    });

    const h = upstream.headers;

    if (h["content-type"]) res.setHeader("Content-Type", h["content-type"]);
    if (h["content-length"])
      res.setHeader("Content-Length", h["content-length"]);
    if (h["accept-ranges"]) res.setHeader("Accept-Ranges", h["accept-ranges"]);
    if (h["content-range"]) res.setHeader("Content-Range", h["content-range"]);

    res.setHeader("Cache-Control", "public, max-age=86400");
    res.setHeader("Vary", "Range");

    res.status(upstream.status);
    upstream.data.pipe(res);
  } catch (err) {
    console.error("Proxy error:", err.response?.status, err.message);
    res.status(500).json({ error: "Failed to fetch media" });
  }
});

export default instagramRoute;
