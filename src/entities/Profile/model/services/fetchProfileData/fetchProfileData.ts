import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('/profiles/1');

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with login');
    }
  },
);
