import { FC } from "react";
import { TVideoPlayerProps } from "./model/types.ts";
import { StyledWrap } from "./model/styles.ts";

const VideoPlayer: FC<TVideoPlayerProps> = ({ source }) => {
  return (
    <StyledWrap class={"video-root"}>
      <video src={source}></video>
    </StyledWrap>
  );
};

export default VideoPlayer;
