import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const data: Profile = {
      first_name: 'Name',
      last_name: 'Last name',
      username: 'username',
      age: 12,
      position: 'position',
      avatar: 'https://www.avatar.png',
      country: Country.France,
      city: 'Paris',
      currency: Currency.EUR,
      email: 'email',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
