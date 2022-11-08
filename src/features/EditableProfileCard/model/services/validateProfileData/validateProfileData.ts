import { Profile, ValidateProfileError } from 'entities/Profile';

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidateProfileError[] = [];

  if (!profile) {
    errors.push(ValidateProfileError.EMPTY_FORM_DATA);
  }

  if (!profile?.email) {
    errors.push(ValidateProfileError.EMAIL_REQUIRED);
  }

  if (!profile?.first_name) {
    errors.push(ValidateProfileError.FIRST_NAME_REQUIRED);
  }

  if (!profile?.last_name) {
    errors.push(ValidateProfileError.LAST_NAME_REQUIRED);
  }

  if (!profile?.age) {
    errors.push(ValidateProfileError.AGE_REQUIRED);
  } else if (profile.age < 0) {
    errors.push(ValidateProfileError.AGE_IS_NEGATIVE);
  } else if (!Number.isInteger(profile.age)) {
    errors.push(ValidateProfileError.AGE_NOT_INTEGER);
  }

  return errors;
};
