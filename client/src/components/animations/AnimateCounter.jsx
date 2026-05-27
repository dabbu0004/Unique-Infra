import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AnimateCounter = ({ value, duration = 1.5, className = "" }) => {
  const ref = useRef();
  const observerRef = useRef();
  const tlRef = useRef();

  useEffect(() => {
    const node = ref.current;
    let observer;

    const animate = () => {
      if (tlRef.current) tlRef.current.kill();
      tlRef.current = gsap.fromTo(
        node,
        { innerText: 0 },
        {
          innerText: value,
          duration,
          snap: { innerText: 1 },
          ease: "power1.out",
          onUpdate: () => {
            node.innerText = Math.floor(node.innerText);
          },
          onComplete: () => {
            node.innerText = value;
          },
        }
      );
    };

    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          if (tlRef.current) tlRef.current.kill();
          node.innerText = 0;
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
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
};

export default AnimateCounter;
