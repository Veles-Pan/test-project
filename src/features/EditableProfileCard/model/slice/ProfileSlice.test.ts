import { ProfileSchema } from 'entities/Profile';
import { profileReducer, profileActions } from './ProfileSlice';

describe('counterSlice.test', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false)),
    ).toEqual({ readonly: false });
  });
  test('cancelEdittingProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      profile: { first_name: 'Test' },
      form: { first_name: 'Test2' },
      readonly: false,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdittingProfile()),
    ).toEqual({
      readonly: true,
      profile: { first_name: 'Test' },
      form: { first_name: 'Test' },
    });
  });
  test('updateForm', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { first_name: 'Test', last_name: 'Test2' },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.updateForm({ first_name: 'Test3' })),
    ).toEqual({
      form: { first_name: 'Test3', last_name: 'Test2' },
    });
  });
  test('cancelEdittingAvatar', () => {
    const state: DeepPartial<ProfileSchema> = {
      profile: { avatar: 'test.png' },
      form: { avatar: 'test2.png' },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdittingAvatar()),
    ).toEqual({
      profile: { avatar: 'test.png' },
      form: { avatar: 'test.png' },
    });
  });
});
