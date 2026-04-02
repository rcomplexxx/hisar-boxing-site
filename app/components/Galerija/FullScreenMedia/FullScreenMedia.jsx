"use client";

import { useState, useRef, useEffect } from "react";
import { X, ZoomIn, ZoomOut, Play, Pause } from "lucide-react";

export default function FullscreenMediaViewer({ src='/Images/kickboxing.png', type='image', onClose }) {
  const [zoom, setZoom] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white"
      >
        <X size={32} />
      </button>

      {/* Media */}
      <div className="max-w-full max-h-full flex items-center justify-center">
        {type === "image" ? (
          <img
            src={src}
            alt="media"
            style={{ transform: `scale(${zoom})` }}
            className="transition-transform duration-200 max-h-[90vh] max-w-[90vw] object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            className="max-h-[90vh] max-w-[90vw]"
            controls={false}
          />
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 flex gap-4 items-center">
        {type === "image" && (
          <>
            <button
              onClick={handleZoomIn}
              className="bg-white/10 p-3 rounded-full text-white"
            >
              <ZoomIn />
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white/10 p-3 rounded-full text-white"
            >
              <ZoomOut />
            </button>
          </>
        )}

        {type === "video" && (
          <button
            onClick={togglePlay}
            className="bg-white/10 p-3 rounded-full text-white"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        )}
      </div>
    </div>
  );
}


/*
USAGE EXAMPLE:

<FullscreenMediaViewer
  src="/your-image-or-video.mp4"
  type="image" // or "video"
  onClose={() => setOpen(false)}
/>
*/
