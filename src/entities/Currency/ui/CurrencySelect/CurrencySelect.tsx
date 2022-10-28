import { memo, useCallback } from 'react';
import { classNames, Select } from 'shared';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  isReadonly?: boolean
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.GBP, content: Currency.GBP },
];

export const CurrencySelect = memo(({
  className, value, onChange, isReadonly,
}: CurrencySelectProps) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);
  return (
    <div className={classNames(className)}>
      <Select isReadonly={isReadonly} value={value} onChange={onChangeHandler} options={options} />
    </div>
  );
});
