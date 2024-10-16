import "./assets/app.css";
import "./assets/normalize.css";
import VideoPlayer from "../entities/video-player";
import video from "../shared/assets/media/video.mp4";
import { StyledVideoWrap } from "./model/styles.ts";

function App() {
  return (
    <StyledVideoWrap>
      <VideoPlayer source={video as string} />
    </StyledVideoWrap>
  );
}

export default App;
