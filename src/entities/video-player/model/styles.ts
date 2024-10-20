import styled from "styled-components";

export const StyledWrap = styled("div")(() => ({
  display: "block",
  width: "100%",
  maxWidth: "800px",
  position: "relative",
  video: {
    display: "block",
    maxWidth: "100%",
  },
}));

export const StyledVideoOverlay = styled("div")(
  ({ $isPaused }: { $isPaused?: boolean }) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white",
    opacity: 0,
    transition: "opacity .3s",
    "&:hover": {
      opacity: 1,
    },
    zIndex: 1,
    ...($isPaused ? { opacity: 1 } : {}),
  }),
);

export const StyledVideoFooter = styled("div")(() => ({}));

export const StyledTimeline = styled("div")(() => ({}));

export const StyledControls = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  position: "relative",
  zIndex: 1,
  "&::before": {
    position: "absolute",
    width: "100%",
    height: "100%",
    content: '""',
    bottom: 0,
    left: 0,
    backgroundImage:
      "linear-gradient(to bottom, rgb(0, 0, 0, 0), rgb(0, 0, 0, .6))",
    zIndex: -1,
  },
}));

export const StyledControlButton = styled("button")(() => ({
  cursor: "pointer",
  border: 0,
  background: "transparent",
  color: "inherit",
  height: "38px",
  width: "38px",
  display: "grid",
  placeContent: "center",
  opacity: 0.85,
  transition: "opacity .15s ease-in-out",
  svg: {
    width: "auto",
    height: "34px",
  },
  "&:hover": {
    opacity: 1,
  },
}));
