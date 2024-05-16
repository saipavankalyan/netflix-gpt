import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = ({ filter = 'all' }) => {
  const { movies, tvSeries } = useSelector((store) => store);

  return (
    (movies.nowPlayingMovies || tvSeries.onTheAirTvSeries) && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-12 relative z-20">
          {(filter === 'all' || filter === 'movies') && (
            <>
              <MovieList
                title={'Now Playing Movies'}
                movies={movies.nowPlayingMovies}
              />
              <MovieList title={'Popular'} movies={movies.popularMovies} />
              <MovieList
                title={'Top Rated Movies'}
                movies={movies.topRatedMovies}
              />
              <MovieList
                title={'Upcoming Movies'}
                movies={movies.upcomingMovies}
              />
            </>
          )}
          {(filter === 'all' || filter === 'tvSeries') && (
            <>
              <MovieList
                title={'Popular TV Series'}
                movies={tvSeries.popularTVSeries}
              />
              <MovieList
                title={'Top Rated TV Series'}
                movies={tvSeries.topRatedTVSeries}
              />
              <MovieList
                title={'Airing Today TV Series'}
                movies={tvSeries.airingTodayTVSeries}
              />
            </>
          )}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
