import { TUsePlayVideoArgs } from "./model/types.ts";
import { useEffect, useState } from "react";

const usePlayVideo = ({ ref, defaultValue = true }: TUsePlayVideoArgs) => {
  const [isPaused, setPaused] = useState(defaultValue);

  const handlePlay = () => setPaused(false);
  const handlePause = () => setPaused(true);

  const toggleVideo = () => {
    const video = ref.current;
    if (video) {
      if (isPaused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    const video = ref.current;

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, [ref]);

  const handleKeyDown = (e: KeyboardEvent) => {
    // Only prevent default behavior for "space" and "k" keys
    if (e.key === " " || e.key.toLowerCase() === "k") {
      e.preventDefault();
    }

    switch (e.key.toLowerCase()) {
      case " ":
      case "k":
        toggleVideo();
        break;
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPaused, ref]);

  return { isPaused, toggleVideo };
};

export default usePlayVideo;
