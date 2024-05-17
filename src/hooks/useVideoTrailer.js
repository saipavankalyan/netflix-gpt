import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo as addMovieTrailerVideo } from '../utils/moviesSlice';
import { addTrailerVideo as addTvSeriesTrailerVideo } from '../utils/tvSeriesSlice';

const useVideoTrailer = (videoId, videoType) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) =>
    videoType === 'movies'
      ? store.movies.trailerVideo
      : store.tvSeries.trailerVideo
  );

  const url =
    videoType === 'movies'
      ? `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`
      : `https://api.themoviedb.org/3/tv/${videoId}/videos?language=en-US`;

  const getVideos = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];

    if (videoType === 'movies') {
      dispatch(addMovieTrailerVideo(trailer));
    } else {
      dispatch(addTvSeriesTrailerVideo(trailer));
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default useVideoTrailer;
