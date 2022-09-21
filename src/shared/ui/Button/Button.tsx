import { classNames } from 'shared'
import styles from './Button.module.scss'

export enum ButtonThemes {
  COMMON = 'common',
  SWITCHER = 'themeSwitcher'
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes
}

export const Button: React.FC<ButtonProps> = ({
  className,
  theme = ButtonThemes.COMMON,
  onClick,
  children
}) => {
  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
