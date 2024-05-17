import { createSlice } from '@reduxjs/toolkit';
import { clear } from '@testing-library/user-event/dist/clear';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    movieGenres: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieGenres: (state, action) => {
      state.movieGenres = action.payload;
    },
    clearState: (state) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.trailerVideo = null;
      state.upcomingMovies = null;
      state.movieGenres = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieGenres,
  clearState,
} = moviesSlice.actions;

export default moviesSlice.reducer;
