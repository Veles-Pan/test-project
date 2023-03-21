import { memo, useCallback } from 'react';
import { classNames, Select } from 'shared';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  isReadonly?: boolean
}

const options = [
  { value: Country.France, content: Country.France },
  { value: Country.Portugal, content: Country.Portugal },
  { value: Country.UK, content: Country.UK },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(({
  className, value, onChange, isReadonly,
}: CountrySelectProps) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);
  return (
    <div className={classNames(className)}>
      <Select isReadonly={isReadonly} value={value} onChange={onChangeHandler} options={options} />
    </div>
  );
});
