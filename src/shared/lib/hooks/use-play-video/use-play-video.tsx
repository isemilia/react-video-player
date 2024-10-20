import { TUsePlayVideoArgs } from "./model/types.ts";
import { useEffect, useState } from "react";

const usePlayVideo = ({ ref, defaultValue = true }: TUsePlayVideoArgs) => {
  const [isPaused, setPaused] = useState(defaultValue);

  const handlePlay = () => setPaused(false);
  const handlePause = () => setPaused(true);

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

  return { isPaused };
};

export default usePlayVideo;
