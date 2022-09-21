import { useState } from 'react';
import { Button, classNames, ToggleArrowImage } from 'shared';
import { ButtonThemes } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: !isOpen }, [
        className,
      ])}
    >
      <Button
        className={classNames(styles.button, {
          [styles.buttonInverted]: isOpen,
        })}
        theme={ButtonThemes.CLEAN}
        onClick={toggleSidebar}
      >
        <ToggleArrowImage className={styles.arrow} />
      </Button>
      <LanguageSwitcher
        isOpen={isOpen}
        className={classNames(styles.langSwitcher)}
      />
    </div>
  );
};
