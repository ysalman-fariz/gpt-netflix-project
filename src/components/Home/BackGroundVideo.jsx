import useFetchTrailerBgVideo from "../../hooks/useFetchTrailerBgVideo";
import bgtrailer from "../../assets/bgtrailerOdyssey.mp4";
import { useRef } from "react";
const BackGroundVideo = (movieId) => {
  useFetchTrailerBgVideo(movieId);
  const videoRef = useRef();
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 35; 
      videoRef.current.play(); 
    }
  };

  return (
    <>
      <video
        className="w-screen  aspect-video   "
        ref={videoRef}
        src={bgtrailer}
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onContextMenu={(e) => e.preventDefault()}
      />
    </>
  );
};
export default BackGroundVideo;
