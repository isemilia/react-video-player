import "./assets/app.css";
import "./assets/normalize.css";
import VideoPlayer from "../entities/video-player";
import video from "../shared/assets/media/video.mp4";
import { StyledVideoWrap } from "./model/styles.ts";
import { useState } from "react";

function App() {
  const [isFullScreen, setFullScreen] = useState(false);

  const handleFullScreenChange = (isActive: boolean) => {
    setFullScreen(isActive);
  };

  return (
    <StyledVideoWrap $isFullScreen={isFullScreen}>
      <VideoPlayer
        source={video as string}
        onFullScreenChange={handleFullScreenChange}
      />
    </StyledVideoWrap>
  );
}

export default App;
