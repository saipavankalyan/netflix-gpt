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
                videoType={'movies'}
              />
              <MovieList
                title={'Popular Movies'}
                movies={movies.popularMovies}
                videoType={'movies'}
              />
              <MovieList
                title={'Top Rated Movies'}
                movies={movies.topRatedMovies}
                videoType={'movies'}
              />
              <MovieList
                title={'Upcoming Movies'}
                movies={movies.upcomingMovies}
                videoType={'movies'}
              />
            </>
          )}
          {(filter === 'all' || filter === 'tvSeries') && (
            <>
              <MovieList
                title={'Popular TV Series'}
                movies={tvSeries.popularTVSeries}
                videoType={'tvSeries'}
              />
              <MovieList
                title={'Top Rated TV Series'}
                movies={tvSeries.topRatedTVSeries}
                videoType={'tvSeries'}
              />
              <MovieList
                title={'Airing Today TV Series'}
                movies={tvSeries.airingTodayTVSeries}
                videoType={'tvSeries'}
              />
            </>
          )}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
