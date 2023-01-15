import { ChangeEvent, useMemo } from 'react';
import { classNames, Text } from 'shared';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  isReadonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  isReadonly,
}: SelectProps<T>) => {
  const optionsList = useMemo(
    () => options.map((option) => (
      <option
        className={styles.option}
        key={option.value}
        value={option.value}
      >
        {option.content}
      </option>
    )),
    [options],
  );

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  return (
    <div className={styles.container}>
      {label && <Text text={`${label}: `} className={styles.label} />}
      <div
        className={classNames(styles.selectorWrapper, {
          [styles.readonlyWrapper]: isReadonly,
        })}
      >
        <select
          disabled={isReadonly}
          onChange={onChangeHandler}
          value={value}
          className={classNames(styles.select, {}, [className])}
        >
          {optionsList}
        </select>
      </div>
    </div>
  );
};
