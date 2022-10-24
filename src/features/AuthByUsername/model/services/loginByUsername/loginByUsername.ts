import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setUserData(response.data));
      extra.navigate('/profile');
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with login');
    }
  },
);
