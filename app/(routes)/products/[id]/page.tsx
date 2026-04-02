"use client";

import { useState, useRef } from "react";

interface ProductIDProps {
  videoSrc?: string;
  thumbnail?: string;
  views?: string;
  likes?: number;
  productCount?: number;
  tag?: string;
  title?: string;
}

export default function ProductID({
  videoSrc = "/video.mp4",
  thumbnail = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
  views = "47.3K",
  likes = 12,
  productCount = 5,
  tag = "Summer long",
  title = "5 summer essentials for non-sticky, acne-proof skincare routine",
}: ProductIDProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(likes);
  const [progress, setProgress] = useState<number>(0);
  const [showPlay, setShowPlay] = useState<boolean>(true);

  const togglePlay = (): void => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      setShowPlay(true);
    } else {
      videoRef.current.play();
      setPlaying(true);
      setTimeout(() => setShowPlay(false), 600);
    }
  };

  const handleTimeUpdate = (): void => {
    if (!videoRef.current) return;
    const pct =
      (videoRef.current.currentTime / (videoRef.current.duration || 1)) * 100;
    setProgress(pct);
  };

  const handleLike = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width),
    );
    videoRef.current.currentTime = ratio * videoRef.current.duration;
  };

  return (
    <div
      onClick={togglePlay}
      className="relative overflow-hidden cursor-pointer select-none"
      style={{
        width: 270,
        height: 480,
        borderRadius: 14,
        background: "#000",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ── Real video (converted from .ts → .mp4) ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={thumbnail}
        className="absolute inset-0 w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setPlaying(false);
          setShowPlay(true);
          setProgress(0);
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
        playsInline
        preload="metadata"
      />

      {/* ── Vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 28%, transparent 50%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ── TOP RIGHT: view count badge ── */}
      <div
        className="absolute flex items-center gap-1"
        style={{
          top: 10,
          right: 10,
          background: "rgba(0,0,0,0.52)",
          backdropFilter: "blur(6px)",
          borderRadius: 999,
          padding: "4px 9px",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
          {views}
        </span>
      </div>

      {/* ── CENTER: Play / Pause ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: showPlay ? 1 : 0, transition: "opacity 0.25s ease" }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.22)",
            border: "2px solid rgba(255,255,255,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="4" width="4" height="16" rx="1.5" />
              <rect x="15" y="4" width="4" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginLeft: 3 }}
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </div>
      </div>

      {/* ── BOTTOM OVERLAY ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ padding: "0 12px 10px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Row: Products pill + tag + heart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            {/* Products pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 999,
                padding: "3px 9px",
              }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span style={{ color: "white", fontSize: 11, fontWeight: 600 }}>
                {productCount} Products
              </span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.82)", fontSize: 11 }}>
              {tag}
            </span>
          </div>

          {/* Heart + count */}
          <button
            onClick={handleLike}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: 0,
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={liked ? "#ff3b5c" : "none"}
              stroke={liked ? "#ff3b5c" : "white"}
              strokeWidth="2"
              style={{ transition: "all 0.2s" }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span style={{ color: "white", fontSize: 12, fontWeight: 600 }}>
              {likeCount}
            </span>
          </button>
        </div>

        {/* Title */}
        <p
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.38,
            margin: "0 0 9px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textShadow: "0 1px 6px rgba(0,0,0,0.55)",
          }}
        >
          {title}
        </p>

        {/* Progress bar */}
        <div
          onClick={handleSeek}
          style={{
            height: 3,
            background: "rgba(255,255,255,0.3)",
            borderRadius: 999,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "white",
              borderRadius: 999,
              transition: "width 0.2s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
