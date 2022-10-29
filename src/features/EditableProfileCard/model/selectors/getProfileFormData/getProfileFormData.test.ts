import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData', () => {
  test('should return profile form data', () => {
    const data = {
      first_name: 'Name',
      last_name: 'Last name',
      age: 12,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileFormData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});
