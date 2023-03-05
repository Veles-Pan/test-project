import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (userId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>(`/profiles/${userId}`);

      if (!response.data) {
        throw new Error();
      }

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with fetch profile data');
    }
  },
);
