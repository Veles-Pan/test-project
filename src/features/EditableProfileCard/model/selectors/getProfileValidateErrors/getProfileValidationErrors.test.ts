import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors', () => {
  test('should return profile errors data', () => {
    const errors = [ValidateProfileError.AGE_REQUIRED, ValidateProfileError.FIRST_NAME_REQUIRED];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors: errors,
      },
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
