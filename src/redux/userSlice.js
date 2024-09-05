import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userInfo = action.payload;
      state.loggedIn = true;
    },
    loginUser: (state, action) => {
      state.loggedIn = true;
      state.userInfo = action.payload;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
