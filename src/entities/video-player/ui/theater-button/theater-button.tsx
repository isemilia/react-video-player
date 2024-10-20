import { FC, MouseEventHandler } from "react";
import { StyledControlButton } from "../../model/styles.ts";

const TheaterButton: FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}> = ({ onClick, isActive = false }) => {
  return (
    <StyledControlButton onClick={onClick}>
      {isActive ? (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
          />
        </svg>
      )}
    </StyledControlButton>
  );
};

export default TheaterButton;
