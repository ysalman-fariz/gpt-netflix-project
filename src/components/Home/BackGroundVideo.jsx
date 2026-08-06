import useFetchTrailerBgVideo from "../../hooks/useFetchTrailerBgVideo";
import bgtrailer from "../../assets/bgtrailerOdyssey.mp4";
import { useRef } from "react";
import { useSelector } from "react-redux";
const BackGroundVideo = (movieId) => {
  const selecter = useSelector((store) => store.NPmovies.trailerVideo);

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
      
        className="w-screen  aspect-video "
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
