import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

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
  id: '123',
};

describe('fetchProfileData', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(data.id!);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(data.id!);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error with fetch profile data');
  });
});
