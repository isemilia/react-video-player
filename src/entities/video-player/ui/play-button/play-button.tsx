import { FC } from "react";
import { StyledControlButton } from "../../model/styles.ts";

const PlayButton: FC<{ isPlaying?: boolean }> = ({ isPlaying = false }) => {
  return (
    <StyledControlButton>
      {isPlaying ? (
        <svg className="pause-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
        </svg>
      ) : (
        <svg
          className="play-icon"
          viewBox="0 0 24 24"
          width={"24"}
          height={"24"}
        >
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      )}
    </StyledControlButton>
  );
};

export default PlayButton;
