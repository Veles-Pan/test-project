import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { LOCAL_STORAGE_AUTH } from 'shared';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    const userId = localStorage.getItem(LOCAL_STORAGE_AUTH);
    try {
      const response = await extra.api.get<Profile>(`/profiles/${userId}`);

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with login');
    }
  },
);
