import { classNames } from 'shared';
import styles from './Button.module.scss';

export enum ButtonThemes {
  COMMON = 'common',
  SWITCHER = 'themeSwitcher',
  CLEAN = 'clean',
  RELOAD = 'reload'
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes
}

export const Button: React.FC<ButtonProps> = ({
  className,
  theme = ButtonThemes.COMMON,
  onClick,
  children,
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(styles.button, {}, [className, styles[theme]])}
    onClick={onClick}
  >
    {children}
  </button>
);
