import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('test with only one param', () => {
    expect(classNames('className')).toBe('className');
  });

  test('test with additional params', () => {
    expect(classNames('className', {}, ['classNameAddition1', 'classNameAddition2'])).toBe('className classNameAddition1 classNameAddition2');
  });

  test('test with mods params', () => {
    expect(classNames('className', { classNameTrue: true, classNameFalse: false }, ['classNameAddition1', 'classNameAddition2']))
      .toBe('className classNameAddition1 classNameAddition2 classNameTrue');
  });

  test('test with only mods params', () => {
    expect(classNames('', { classNameTrue: true, classNameFalse: false }, ['']))
      .toBe(' classNameTrue');
  });

  test('test with only mods and undefined params', () => {
    expect(classNames(undefined, { classNameTrue: true, classNameUndefined: undefined }, ['']))
      .toBe(' classNameTrue');
  });
});
