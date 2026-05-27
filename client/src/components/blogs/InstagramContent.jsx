import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { FiExternalLink } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import AnimateAppear from "../animations/AnimateAppear";

const InstagramContent = ({ limit, onError }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [broken, setBroken] = useState(() => new Set());
  const videoRefs = useRef(new Map());
  const observerRef = useRef(null);
  const activeAudibleIdRef = useRef(null);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const getProxiedUrl = useMemo(
    () => (url) =>
      `${
        import.meta.env.VITE_BACKEND_URL
      }/instagram/proxy?url=${encodeURIComponent(url)}`,
    [],
  );

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/instagram`)
      .then((res) => {
        const payload = res.data;
        if (Array.isArray(payload)) setPosts(payload);
        else if (Array.isArray(payload?.data)) setPosts(payload.data);
        else setPosts([]);
        setLoading(false);
      })
      .catch((err) => {
        const message = err?.message || "Failed to load Instagram content";
        setError(message);
        onError?.(message);
        setLoading(false);
      });
  }, []);

  const safePosts = Array.isArray(posts) ? posts : [];
  const visiblePosts = useMemo(() => {
    if (typeof limit === "number" && limit > 0) {
      return safePosts.slice(0, limit);
    }
    return safePosts.slice(0, visibleCount);
  }, [safePosts, limit, visibleCount]);

  const hasMorePosts = !limit && visibleCount < safePosts.length;

  const loadMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const isMobileEnv = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches
    );
  };

  const setActiveAudible = async (postId) => {
    const target = videoRefs.current.get(postId);
    if (!target) return;
    for (const [id, v] of videoRefs.current.entries()) {
      if (id !== postId && v) {
        try {
          v.muted = true;
          v.pause();
        } catch {}
      }
    }
    activeAudibleIdRef.current = postId;
    try {
      target.loop = true;
      target.playsInline = true;
      target.muted = !audioUnlocked;
      target.volume = audioUnlocked ? 1 : 0;
      const p = target.play();
      if (p?.catch) await p.catch(() => {});
    } catch {}
  };

  const deactivateIfActive = (postId) => {
    const v = videoRefs.current.get(postId);
    if (!v) return;
    try {
      v.muted = true;
      v.pause();
    } catch {}
    if (activeAudibleIdRef.current === postId) {
      activeAudibleIdRef.current = null;
    }
  };

  useEffect(() => {
    if (!isMobileEnv()) return;
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          );
        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-postid");
          if (id) setActiveAudible(id);
        }
        entries.forEach((e) => {
          if (!e.isIntersecting) {
            const id = e.target.getAttribute("data-postid");
            if (id) deactivateIfActive(id);
          }
        });
      },
      { threshold: [0.25, 0.5, 0.65, 0.8] },
    );
    for (const v of videoRefs.current.values()) {
      if (v) observerRef.current.observe(v);
    }
    return () => observerRef.current?.disconnect();
  }, [visiblePosts.length, audioUnlocked]);

  const registerVideoRef = (postId) => (el) => {
    if (el) {
      videoRefs.current.set(postId, el);
      if (isMobileEnv() && observerRef.current) observerRef.current.observe(el);
    } else {
      const prev = videoRefs.current.get(postId);
      if (prev && observerRef.current) observerRef.current.unobserve(prev);
      videoRefs.current.delete(postId);
    }
  };

  const unlockAudioOnce = () => {
    if (audioUnlocked) return;
    setAudioUnlocked(true);
    const id = activeAudibleIdRef.current;
    const v = videoRefs.current.get(id);
    if (v) {
      try {
        v.muted = false;
        v.volume = 1;
        v.play()?.catch(() => {});
      } catch {}
    }
  };

  const renderedPosts = useMemo(
    () =>
      visiblePosts.map((post) => {
        const isVideo = post.media_type === "VIDEO";
        const src = post.media_url && getProxiedUrl(post.media_url);
        const isBroken = broken.has(post.id);
        return (
          <div
            key={post.id}
            className="w-full md:w-[calc(33.333%-1.17rem)] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square bg-neutral-100">
                {!isBroken && !isVideo && src && (
                  <img
                    src={src}
                    alt="Instagram post"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={() => setBroken((p) => new Set([...p, post.id]))}
                  />
                )}
                {!isBroken && isVideo && src && (
                  <video
                    ref={registerVideoRef(post.id)}
                    data-postid={post.id}
                    src={src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      e.currentTarget.muted = false;
                      e.currentTarget.volume = 1;
                      e.currentTarget.play()?.catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.muted = true;
                    }}
                    onError={() => setBroken((p) => new Set([...p, post.id]))}
                  />
                )}
                {isBroken && (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-200 text-sm text-neutral-700">
                    Media unavailable
                  </div>
                )}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <span className="bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <FiExternalLink className="h-5 w-5 text-white" />
                  </span>
                  {isVideo && (
                    <span className="bg-black/70 p-2 rounded-full">
                      <BsCameraVideo className="h-5 w-5 text-white" />
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 border-t border-neutral-100">
                <p className="text-sm text-neutral-800 font-medium line-clamp-2">
                  {post.caption || "View on Instagram"}
                </p>
              </div>
            </a>
          </div>
        );
      }),
    [visiblePosts, broken],
  );

  if (error) {
    return null;
  }

  return (
    <section
      className="bg-gradient-to-b from-[#eaf7ff] via-white to-[#e0f3ff]"
      onTouchStart={unlockAudioOnce}
      onClick={unlockAudioOnce}
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        <AnimateAppear>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-2 text-center">
            Social <span className="text-[#19587e]">Insights</span>
          </h2>
          <p className="text-center text-base text-gray-600 mb-8">
            Explore our latest updates and stories from Instagram.
          </p>
        </AnimateAppear>

        {loading && !error && (
          <div className="flex flex-wrap gap-7">
            {Array.from({ length: limit || 6 }).map((_, i) => (
              <div
                key={i}
                className="w-full md:w-[calc(33.333%-1.17rem)] h-72 rounded-2xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex flex-wrap gap-7">{renderedPosts}</div>
            {visiblePosts.length === 0 && (
              <div className="text-center py-12 text-gray-500 text-xl">
                No posts available
              </div>
            )}
            {hasMorePosts && (
              <div className="mt-4 text-center">
                <button
                  onClick={loadMorePosts}
                  className="bg-[#004068] cursor-pointer text-white px-6 py-2 text-base rounded-md font-semibold hover:bg-[#00273f] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center mx-auto"
                >
                  <span>Load More Posts</span>
                  <HiArrowNarrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default InstagramContent;
