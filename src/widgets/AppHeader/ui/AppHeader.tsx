import { classNames } from 'shared'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import styles from './AppHeader.module.scss'

interface AppHeaderProps {
  className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <NavBar />
      <ThemeSwitcher />
    </header>
  )
}
