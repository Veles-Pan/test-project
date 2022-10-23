import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, classNames } from 'shared';
import { SidebarItemProps } from '../../model/items';
import styles from './SidebarItem.module.scss';

export const SidebarItem = memo(({
  path, text, collapsed, Icon,
}: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink className={classNames(styles.item, { [styles.collapsed]: collapsed }, ['link'])} to={path}>
      <Icon className={styles.icon} />
      <div className={styles.text}>{t(text)}</div>
    </AppLink>
  );
});
