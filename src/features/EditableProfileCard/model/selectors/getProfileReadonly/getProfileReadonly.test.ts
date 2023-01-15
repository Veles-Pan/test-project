import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return profile readonly status', () => {
    const data = {
      first_name: 'Name',
      last_name: 'Last name',
      age: 12,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data,
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
