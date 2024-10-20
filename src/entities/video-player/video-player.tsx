import { FC, useRef } from "react";
import { TVideoPlayerProps } from "./model/types.ts";
import {
  StyledControls,
  StyledTimeline,
  StyledVideoFooter,
  StyledVideoOverlay,
  StyledWrap,
} from "./model/styles.ts";
import PlayButton from "./ui/play-button";
import usePlayVideo from "../../shared/lib/hooks/use-play-video";

const VideoPlayer: FC<TVideoPlayerProps> = ({ source }) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const { isPaused } = usePlayVideo({ ref: videoRef });

  return (
    <StyledWrap class={"video-root"}>
      <StyledVideoOverlay>
        <StyledVideoFooter>
          <StyledTimeline></StyledTimeline>
          <StyledControls>
            <PlayButton
              isPaused={isPaused}
              onClick={() => {
                if (!videoRef.current) return;

                if (isPaused) {
                  videoRef.current?.play();
                } else {
                  videoRef.current?.pause();
                }
              }}
            />
          </StyledControls>
        </StyledVideoFooter>
      </StyledVideoOverlay>

      <video ref={videoRef} src={source}></video>
    </StyledWrap>
  );
};

export default VideoPlayer;
