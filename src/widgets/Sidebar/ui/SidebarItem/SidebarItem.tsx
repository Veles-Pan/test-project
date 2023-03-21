import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, classNames } from 'shared';
import { SidebarItemProps } from '../../model/types/sidebar';
import styles from './SidebarItem.module.scss';

export const SidebarItem = memo(({
  path, text, collapsed, Icon, isAuthOnly,
}: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (isAuthOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={classNames(styles.item, { [styles.collapsed]: collapsed }, ['link'])} to={path}>
      <Icon className={styles.icon} />
      <div className={styles.text}>{t(text)}</div>
    </AppLink>
  );
});
