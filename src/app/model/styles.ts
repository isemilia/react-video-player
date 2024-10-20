import styled from "styled-components";

export const StyledVideoWrap = styled("div")(
  ({ $isFullScreen }: { $isFullScreen?: boolean }) => ({
    margin: "20px auto 0",
    display: "grid",
    placeContent: "center",
    width: "100%",
    ...($isFullScreen ? { marginTop: "0px !important" } : {}),
  }),
);
