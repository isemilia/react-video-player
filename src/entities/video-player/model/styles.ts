import styled from "styled-components";

export const StyledWrap = styled("div")(() => ({
  display: "block",
  width: "100%",
  maxWidth: "800px",
  video: {
    display: "block",
    maxWidth: "100%",
  },
}));

export const StyledVideoFooter = styled("div")(() => ({}));

export const StyledTimeline = styled("div")(() => ({}));

export const StyledControls = styled("div")(() => ({}));

export const StyledControlButton = styled("div")(() => ({
  svg: {
    width: "40px",
    height: "40px",
  },
}));
