import { createSlice } from '@reduxjs/toolkit';
import { clear } from '@testing-library/user-event/dist/clear';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearState: (state) => {
      state.showGPTSearch = false;
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult, clearState } =
  gptSlice.actions;

export default gptSlice.reducer;
