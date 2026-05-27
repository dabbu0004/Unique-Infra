import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AnimateHighlightText = ({
  children,
  highlightGradient = "linear-gradient(90deg, #034a76 0%, #98cf61 100%)",
  delay = 0,
  duration = 0,
  className = "",
  style = {},
}) => {
  const textRef = useRef(null);
  const highlightRef = useRef(null);
  const observerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const node = textRef.current;
    const highlight = highlightRef.current;

    const animate = () => {
      if (tlRef.current) tlRef.current.kill();
      tlRef.current = gsap.timeline();
      tlRef.current.set(highlight, { width: 0 });
      tlRef.current.set(node, { color: "#111" });
      tlRef.current.to(
        highlight,
        {
          width: "100%",
          ease: "power2.out",
        },
        0
      );
      tlRef.current.to(
        node,
        {
          color: "#fff",
          ease: "power2.out",
        },
        0.1
      );
    };

    const reset = () => {
      if (tlRef.current) tlRef.current.kill();
      gsap.set(highlight, { width: 0 });
      gsap.set(node, { color: "#111" });
    };

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          reset();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (tlRef.current) tlRef.current.kill();
    };
  }, [delay, duration]);

  return (
    <span
      ref={textRef}
      className={`relative inline-block font-semibold italic px-1 transition-colors ${className}`}
      style={{ zIndex: 0, ...style }}
    >
      <span
        ref={highlightRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 0,
          background: highlightGradient,
          borderRadius: 1,
          zIndex: -1,
          transition: "none",
          pointerEvents: "none",
          transform: "skewX(-10deg)",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
};

export default AnimateHighlightText;
