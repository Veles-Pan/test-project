import {
  ChangeEvent,
  FC, InputHTMLAttributes, memo,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  ...rest
}: InputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={styles.input}
      {...rest}
      placeholder={placeholder}
    />
  );
});
