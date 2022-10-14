import { counterReducer, counterActions } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 100 };

    expect(
      counterReducer(state, counterActions.decrement()),
    ).toEqual({ value: 99 });
  });
  test('increment', () => {
    const state: CounterSchema = { value: 100 };

    expect(
      counterReducer(state, counterActions.increment()),
    ).toEqual({ value: 101 });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({ value: 1 });
  });
});
