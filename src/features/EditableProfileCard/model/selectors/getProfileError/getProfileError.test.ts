import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return profile error', () => {
    const data = {
      first_name: 'Name',
      last_name: 'Last name',
      age: 12,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data,
        error: 'error',
      },
    };
    expect(getProfileError(state as StateSchema)).toBe('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
