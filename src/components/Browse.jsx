import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
import useMovieGenre from '../hooks/useMovieGenre';
import useTVSeriesAiringToday from '../hooks/useTVSeriesAiringToday';
import useTVSeriesOnTheAir from '../hooks/useTVSeriesOnTheAir';
import useTVSeriesPopular from '../hooks/useTVSeriesPopular';
import useTVSeriesTopRated from '../hooks/useTVSeriesTopRated';
import useTVSeriesGenre from '../hooks/useTVSeriesGenre';
import { useSearchParams } from 'react-router-dom/dist';

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const [params, setParams] = useSearchParams();

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useMovieGenre();
  useTVSeriesAiringToday();
  useTVSeriesOnTheAir();
  useTVSeriesPopular();
  useTVSeriesTopRated();
  useTVSeriesGenre();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer filter={params.get('filter') || 'all'} />
        </>
      )}
    </div>
  );
};
export default Browse;
