import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
  test('validate with no errors', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('validate with empty firstname', () => {
    const result = validateProfileData({ ...data, first_name: '' });

    expect(result).toEqual([ValidateProfileError.FIRST_NAME_REQUIRED]);
  });

  test('validate with empty lastname', () => {
    const result = validateProfileData({ ...data, last_name: '' });

    expect(result).toEqual([ValidateProfileError.LAST_NAME_REQUIRED]);
  });

  test('validate with empty email', () => {
    const result = validateProfileData({ ...data, email: '' });

    expect(result).toEqual([ValidateProfileError.EMAIL_REQUIRED]);
  });

  test('validate with empty age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.AGE_REQUIRED]);
  });

  test('validate with empty data', () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([
      ValidateProfileError.EMPTY_FORM_DATA,
      ValidateProfileError.EMAIL_REQUIRED,
      ValidateProfileError.FIRST_NAME_REQUIRED,
      ValidateProfileError.LAST_NAME_REQUIRED,
      ValidateProfileError.AGE_REQUIRED]);
  });
});
