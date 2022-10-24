import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 100,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 100 });
  });
});
