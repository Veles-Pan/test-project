import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/LoginSchema';
import { getLogin } from '../getLoginState/getLogin';

export const getLoginPassword = createSelector(
  getLogin,
  (counter: LoginSchema) => counter.password,
);
