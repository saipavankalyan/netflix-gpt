import { createSlice } from '@reduxjs/toolkit';
import { clear } from '@testing-library/user-event/dist/clear';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    clearState: (state) => {
      state.lang = 'en';
    },
  },
});

export const { changeLanguage, clearState } = configSlice.actions;

export default configSlice.reducer;
