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

  const { isPaused, toggleVideo } = usePlayVideo({ ref: videoRef });

  return (
    <StyledWrap className={"video-root"}>
      <StyledVideoOverlay>
        <StyledVideoFooter>
          <StyledTimeline></StyledTimeline>
          <StyledControls>
            <PlayButton
              isPaused={isPaused}
              onClick={() => {
                toggleVideo();
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
