import { classNames } from 'shared'
import { AppLink } from 'shared'
import styles from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <AppLink className="link active" to={'/'}>
        Main Page
      </AppLink>
      <AppLink className="link" to={'/counter'}>
        Counter Page
      </AppLink>
    </nav>
  )
}
