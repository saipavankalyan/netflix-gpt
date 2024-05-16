import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';
import tvSeriesReducer from './tvSeriesSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvSeries: tvSeriesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
