import { loginReducer, loginActions } from './LoginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('counterSlice.test', () => {
  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('user')),
    ).toEqual({ username: 'user' });
  });
  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('1234')),
    ).toEqual({ password: '1234' });
  });
});
