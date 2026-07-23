"use client";

import { useEffect, useRef } from "react";

export default function GalleriStageMotion() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);
    return () => motionPreference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/assets/case-galleri5-stage-panorama@2x.png"
      aria-label="The redesigned creation journey moving through Assets, Keyframes, Storyboard, Videos, and Final Cut"
    >
      <source src="/assets/case-galleri5-stage-motion.webm" type="video/webm" />
    </video>
  );
}
