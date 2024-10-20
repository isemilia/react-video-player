import { FC, useEffect, useRef, useState } from "react";
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

const VideoPlayer: FC<TVideoPlayerProps> = ({ source, onFullScreenChange }) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const { isPaused, toggleVideo } = usePlayVideo({ ref: videoRef });

  const [isTheater, setTheater] = useState(false);

  const [isFullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (onFullScreenChange) {
      onFullScreenChange(isFullScreen);
    }
  }, [isFullScreen]);

  useEffect(() => {
    if (isFullScreen) {
      setTheater(false);
    }
  }, [isFullScreen]);

  useEffect(() => {
    if (isTheater) {
      setFullScreen(false);
    }
  }, [isTheater]);

  return (
    <StyledWrap
      className={"video-root"}
      $isTheater={isTheater}
      $isFullScreen={isFullScreen}
    >
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
              <FullScreenButton
                isActive={isFullScreen}
                onClick={() => {
                  setFullScreen((state) => !state);
                }}
              />
            </StyledControlGroup>
          </StyledControls>
        </StyledVideoFooter>
      </StyledVideoOverlay>

      <video ref={videoRef} src={source}></video>
    </StyledWrap>
  );
};

export default VideoPlayer;
