import {
  ChangeEvent,
  FC, InputHTMLAttributes, memo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export enum InputThemes {
  COMMON = 'common',
  ERROR = 'error',
}

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: any) => void
  theme?: InputThemes
  isReadonly?: boolean
}

export const Input: FC<InputProps> = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  theme = InputThemes.COMMON,
  isReadonly = false,
  ...rest
}: InputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [styles.readOnly]: isReadonly,
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      disabled={isReadonly}
      className={classNames(styles.input, { ...mods }, [className, styles[theme]])}
      {...rest}
      placeholder={placeholder}
    />
  );
});
