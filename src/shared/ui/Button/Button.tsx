import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared';
import styles from './Button.module.scss';

export enum ButtonThemes {
  COMMON = 'common',
  SWITCHER = 'themeSwitcher',
  CLEAN = 'clean',
  RELOAD = 'reload'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = ButtonThemes.COMMON,
  onClick,
  children,
  ...rest
}: ButtonProps) => (
  <button
    {...rest}
    type="button"
    className={classNames(styles.button, {}, [className, styles[theme]])}
    onClick={onClick}
  >
    {children}
  </button>
);
