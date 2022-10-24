import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/ProfileSchema';
import { getProfile } from '../getProfile/getProfile';

export const getProfileData = createSelector(
  getProfile,
  (profile: ProfileSchema) => profile?.profile,
);
