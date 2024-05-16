import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularTVSeries } from '../utils/tvSeriesSlice';
import { transformTvsToMovies } from '../utils/transformToMovie';

const useTVSeriesPopular = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularTVSeries = useSelector(
    (store) => store.tvSeries.popularTVSeries
  );

  const getpopularTVSeries = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTVSeries(transformTvsToMovies(json.results)));
  };

  useEffect(() => {
    !popularTVSeries && getpopularTVSeries();
  }, []);
};

export default useTVSeriesPopular;
