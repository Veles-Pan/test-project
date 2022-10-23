import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
  test('should return login', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'username',
        password: 'password',
        error: 'error',
        isLoading: false,
      },
    };
    expect(getLogin(state as StateSchema)).toEqual({
      username: 'username',
      password: 'password',
      error: 'error',
      isLoading: false,
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLogin(state as StateSchema)).toEqual(undefined);
  });
});
