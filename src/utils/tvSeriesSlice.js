import { createSlice } from '@reduxjs/toolkit';

const tvSeriesSlice = createSlice({
  name: 'tvSeries',
  initialState: {
    onTheAirTVSeries: null,
    popularTVSeries: null,
    topRatedTVSeries: null,
    airingTodayTVSeries: null,
    trailerVideo: null,
    tvSeriesGenres: null,
  },
  reducers: {
    addonTheAirTVSeries: (state, action) => {
      state.onTheAirTVSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularTVSeries: (state, action) => {
      state.popularTVSeries = action.payload;
    },
    addTopRatedTVSeries: (state, action) => {
      state.topRatedTVSeries = action.payload;
    },
    addAiringTodayTVSeries: (state, action) => {
      state.airingTodayTVSeries = action.payload;
    },
    addTVSeriesGenres: (state, action) => {
      state.tvSeriesGenres = action.payload;
    },
  },
});

export const {
  addonTheAirTVSeries,
  addTrailerVideo,
  addPopularTVSeries,
  addTopRatedTVSeries,
  addAiringTodayTVSeries,
  addTVSeriesGenres,
} = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
