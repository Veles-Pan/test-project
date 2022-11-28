import { getUserAuthData } from 'entities/User';
import { FC, memo, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, classNames } from 'shared';
import { BurgerMenuItemProps } from 'widgets/AppHeader/model/types/burgerMenu';
import styles from './BurgerMenuItem.module.scss';

export const BurgerMenuItem = memo(({
  path, text, isAuthOnly,
}: BurgerMenuItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (isAuthOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={classNames(styles.item, {}, ['link'])} to={path}>
      <div className={styles.text}>{t(text)}</div>
    </AppLink>
  );
});
