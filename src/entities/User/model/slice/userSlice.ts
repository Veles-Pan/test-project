import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_AUTH } from 'shared';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_AUTH);
      if (user) {
        state.authData = user;
      }
    },
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.authData = state.user.username;
      localStorage.setItem(LOCAL_STORAGE_AUTH, state.user.username);
    },
    logout: (state) => {
      state.user = undefined;
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_AUTH);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
