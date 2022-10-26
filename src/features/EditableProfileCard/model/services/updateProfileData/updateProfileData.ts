import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { LOCAL_STORAGE_AUTH } from 'shared';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileFormData(getState());
    const userId = localStorage.getItem(LOCAL_STORAGE_AUTH);
    try {
      const response = await extra.api.put<Profile>(`/profiles/${userId}`, formData);

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with updating profile data');
    }
  },
);
