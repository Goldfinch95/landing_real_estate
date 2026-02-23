"use client";

import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  src?: string;
  fallbackImage?: string;
}

export function VideoBackground({ src, fallbackImage }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {src ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={fallbackImage}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        /* Fallback gradient when no video src is provided */
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(160deg, #2C3E50 0%, #3D5A6B 30%, #4A6741 60%, #2C3E50 100%)",
          }}
        />
      )}

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}