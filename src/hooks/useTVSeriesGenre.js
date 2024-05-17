import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTVSeriesGenres } from '../utils/tvSeriesSlice';

const useTVSeriesGenre = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const genres = useSelector((store) => store.tvSeries.tvSeriesGenres);

  const getTVSeriesGenres = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/genre/tv/list?language=en',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTVSeriesGenres(json.genres));
  };

  useEffect(() => {
    !genres && getTVSeriesGenres();
  }, []);
};

export default useTVSeriesGenre;
