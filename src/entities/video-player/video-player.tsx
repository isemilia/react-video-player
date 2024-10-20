import { FC, useRef, useState } from "react";
import { TVideoPlayerProps } from "./model/types.ts";
import {
  StyledControlGroup,
  StyledControls,
  StyledTimeline,
  StyledVideoFooter,
  StyledVideoOverlay,
  StyledWrap,
} from "./model/styles.ts";
import PlayButton from "./ui/play-button";
import usePlayVideo from "../../shared/lib/hooks/use-play-video";
import TheaterButton from "./ui/mini-player-button";
import MiniPlayerButton from "./ui/mini-player-button/mini-player-button.tsx";
import FullScreenButton from "./ui/full-screen-button/full-screen-button.tsx";

const VideoPlayer: FC<TVideoPlayerProps> = ({ source }) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const { isPaused, toggleVideo } = usePlayVideo({ ref: videoRef });

  const [isTheater, setTheater] = useState(false);

  return (
    <StyledWrap className={"video-root"} $isTheater={isTheater}>
      <StyledVideoOverlay>
        <StyledVideoFooter>
          <StyledTimeline></StyledTimeline>
          <StyledControls>
            <StyledControlGroup>
              <PlayButton
                isPaused={isPaused}
                onClick={() => {
                  toggleVideo();
                }}
              />
            </StyledControlGroup>
            <StyledControlGroup>
              <MiniPlayerButton />
              <TheaterButton
                isActive={isTheater}
                onClick={() => {
                  setTheater((state) => !state);
                }}
              />
              <FullScreenButton />
            </StyledControlGroup>
          </StyledControls>
        </StyledVideoFooter>
      </StyledVideoOverlay>

      <video ref={videoRef} src={source}></video>
    </StyledWrap>
  );
};

export default VideoPlayer;
