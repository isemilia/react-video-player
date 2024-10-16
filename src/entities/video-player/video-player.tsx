import { FC } from "react";
import { TVideoPlayerProps } from "./model/types.ts";
import {
  StyledControls,
  StyledTimeline,
  StyledVideoFooter,
  StyledVideoOverlay,
  StyledWrap,
} from "./model/styles.ts";
import PlayButton from "./ui/play-button";

const VideoPlayer: FC<TVideoPlayerProps> = ({ source }) => {
  return (
    <StyledWrap class={"video-root"}>
      <StyledVideoOverlay>
        <StyledVideoFooter>
          <StyledTimeline></StyledTimeline>
          <StyledControls>
            <PlayButton isPaused={true} />
            {/*<PlayButton isPaused={true} />*/}
          </StyledControls>
        </StyledVideoFooter>
      </StyledVideoOverlay>

      <video src={source}></video>
    </StyledWrap>
  );
};

export default VideoPlayer;
