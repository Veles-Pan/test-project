import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
import { AppLink } from 'shared'
import styles from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()

  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <AppLink className="link active" to={'/'}>
        {t('header.main-page')}
      </AppLink>
      <AppLink className="link" to={'/counter'}>
        {t('header.counter-page')}
      </AppLink>
    </nav>
  )
}
