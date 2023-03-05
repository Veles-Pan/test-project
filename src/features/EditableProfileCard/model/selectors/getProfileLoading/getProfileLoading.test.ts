import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
  test('should return profile loading status', () => {
    const data = {
      first_name: 'Name',
      last_name: 'Last name',
      age: 12,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data,
        isLoading: true,
      },
    };
    expect(getProfileLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
