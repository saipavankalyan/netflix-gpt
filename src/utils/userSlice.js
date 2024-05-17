import { createSlice } from '@reduxjs/toolkit';
import { clear } from '@testing-library/user-event/dist/clear';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
    clearState: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser, clearState } = userSlice.actions;

export default userSlice.reducer;
