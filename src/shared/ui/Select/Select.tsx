import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Text } from 'shared';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string
  label?: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  isReadonly?: boolean
}

export const Select = memo(({
  className, label, options, value, onChange, isReadonly,
}: SelectProps) => {
  const optionsList = useMemo(() => options.map((option) => (
    <option className={styles.option} key={option.value} value={option.value}>
      {option.content}
    </option>
  )), [options]);

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(styles.selectorWrapper, { [styles.readonlyWrapper]: isReadonly })}>
      {label && (
        <Text text={`${label}: `} className={styles.label} />
      )}
      <select
        disabled={isReadonly}
        onChange={onChangeHandler}
        value={value}
        className={classNames(styles.select, {}, [className])}
      >
        {optionsList}
      </select>
    </div>
  );
});
