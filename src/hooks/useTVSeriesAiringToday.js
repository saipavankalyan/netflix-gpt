import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addAiringTodayTVSeries } from '../utils/tvSeriesSlice';
import { transformTvsToMovies } from '../utils/transformToMovie';

const useTVSeriesAiringToday = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const airingTodayTVSeries = useSelector(
    (store) => store.tvSeries.airingTodayTVSeries
  );

  const getAiringTodayTVSeries = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringTodayTVSeries(transformTvsToMovies(json.results)));
  };

  useEffect(() => {
    !airingTodayTVSeries && getAiringTodayTVSeries();
  }, []);
};

export default useTVSeriesAiringToday;
