import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileAvatar } from './getProfileAvatar';

describe('getProfileAvatar', () => {
  test('should return profile avatar', () => {
    const data = {
      first_name: 'Name',
      last_name: 'Last name',
      age: 12,
      avatar: 'https://www.avatar.png',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data,
      },
    };
    expect(getProfileAvatar(state as StateSchema)).toBe(data.avatar);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileAvatar(state as StateSchema)).toEqual(undefined);
  });
});
