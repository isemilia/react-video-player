import { FC, MouseEventHandler } from "react";
import { StyledControlButton } from "../../model/styles.ts";

const PlayButton: FC<{
  isPaused?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ isPaused = true, onClick }) => {
  return (
    <StyledControlButton $isPaused={isPaused} onClick={onClick}>
      {isPaused ? (
        <svg
          className="play-icon"
          viewBox="0 0 24 24"
          width={"24"}
          height={"24"}
        >
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      ) : (
        <svg className="pause-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
        </svg>
      )}
    </StyledControlButton>
  );
};

export default PlayButton;
