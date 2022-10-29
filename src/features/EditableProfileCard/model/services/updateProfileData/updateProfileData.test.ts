import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData', () => {
  test('success update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error with updating profile data');
  });
});
