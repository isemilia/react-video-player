import { FC } from "react";
import { TVideoPlayerProps } from "./model/types.ts";
import {
  StyledControls,
  StyledTimeline,
  StyledVideoFooter,
  StyledWrap,
} from "./model/styles.ts";
import PlayButton from "./ui/play-button";

const VideoPlayer: FC<TVideoPlayerProps> = ({ source }) => {
  return (
    <StyledWrap class={"video-root"}>
      <StyledVideoFooter>
        <StyledTimeline></StyledTimeline>
        <StyledControls>
          <PlayButton isPlaying={false} />
        </StyledControls>
      </StyledVideoFooter>
      <video src={source}></video>
    </StyledWrap>
  );
};

export default VideoPlayer;
