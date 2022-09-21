import { classNames } from 'shared'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import styles from './AppHeader.module.scss'
import { LogoImage } from 'shared'

interface AppHeaderProps {
  className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div>
        <LogoImage />
      </div>
      <NavBar />
      <ThemeSwitcher />
    </header>
  )
}
