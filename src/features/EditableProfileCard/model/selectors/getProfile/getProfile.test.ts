import { StateSchema } from 'app/providers/StoreProvider';
import { getProfile } from './getProfile';

describe('getProfile', () => {
  test('should return profile', () => {
    const data = {
      first_name: 'Name',
      last_name: 'Last name',
      age: 12,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data, form: data, isLoading: false, error: 'error', readonly: true,
      },
    };
    expect(getProfile(state as StateSchema)).toEqual({
      profile: data, form: data, isLoading: false, error: 'error', readonly: true,
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfile(state as StateSchema)).toEqual(undefined);
  });
});
