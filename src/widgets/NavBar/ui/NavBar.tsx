import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, AppLink } from 'shared';

import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <AppLink className="link active" to="/">
        {t('header.main-page')}
      </AppLink>
    </nav>
  );
});
