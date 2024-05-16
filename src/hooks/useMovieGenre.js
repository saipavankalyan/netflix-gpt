import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMovieGenres } from '../utils/moviesSlice';

const useMovieGenre = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const genres = useSelector((store) => store.movies.movieGenres);

  const getMovieGenres = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieGenres(json.genres));
  };

  useEffect(() => {
    !genres && getMovieGenres();
  }, []);
};

export default useMovieGenre;
