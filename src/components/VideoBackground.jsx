import { useSelector } from 'react-redux';
import useVideoTrailer from '../hooks/useVideoTrailer';

const VideoBackground = ({ movieId, videoType, muted = true }) => {
  const movieTrailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const tvSeriesTrailerVideo = useSelector(
    (store) => store.tvSeries?.trailerVideo
  );

  if (videoType === 'all') {
    videoType = 'movies';
  }

  useVideoTrailer(movieId, videoType);

  const trailerVideo =
    videoType === 'movies' ? movieTrailerVideo : tvSeriesTrailerVideo;

  return (
    <div className=" w-screen h-screen">
      <iframe
        className="w-screen h-screen"
        src={
          'https://www.youtube.com/embed/' +
          trailerVideo?.key +
          `?&autoplay=1&mute=${muted ? 1 : 0}&rel=0`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
