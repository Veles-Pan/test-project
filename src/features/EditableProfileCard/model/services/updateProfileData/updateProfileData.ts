import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { profileActions } from '../../slice/ProfileSlice';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (userId, {
    extra, dispatch, rejectWithValue, getState,
  }) => {
    const formData = getProfileFormData(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      dispatch(profileActions.setValidationErrors(errors));
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>(`/profiles/${userId}`, formData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(profileActions.cancelEdittingProfile());

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
