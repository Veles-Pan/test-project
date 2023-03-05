import { memo, useState } from 'react';
import {
  Button, classNames, ToggleArrowImage,
} from 'shared';
import { ButtonThemes } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { getSidebarItems } from '../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarItems = useSelector(getSidebarItems);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: !isOpen }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={classNames(styles.button, {
          [styles.buttonInverted]: isOpen,
        })}
        theme={ButtonThemes.CLEAN}
        onClick={toggleSidebar}
      >
        <ToggleArrowImage className={styles.arrow} />
      </Button>
      <div className={styles.items}>
        <LanguageSwitcher
          isOpen={isOpen}
          className={classNames(styles.langSwitcher)}
        />
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} {...item} collapsed={!isOpen} />
        ))}

      </div>
    </div>
  );
});
