import { useTheme } from 'app/providers/ThemeProvider'
import { Button, classNames } from 'shared'
import { ButtonThemes } from 'shared/ui/Button/Button'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(styles.button, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonThemes.SWITCHER}
    >
      Change Theme
    </Button>
  )
}
