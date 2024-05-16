import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedTVSeries } from '../utils/tvSeriesSlice';
import { transformTvsToMovies } from '../utils/transformToMovie';

const useTVSeriesTopRated = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topRatedTVSeries = useSelector(
    (store) => store.tvSeries.topRatedTVSeries
  );

  const getTopRatedTVSeries = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTVSeries(transformTvsToMovies(json.results)));
  };

  useEffect(() => {
    !topRatedTVSeries && getTopRatedTVSeries();
  }, []);
};

export default useTVSeriesTopRated;
