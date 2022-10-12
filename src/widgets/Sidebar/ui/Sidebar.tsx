import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppLink, Button, classNames, ToggleArrowImage,
} from 'shared';
import { ButtonThemes } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import CounterIcon from 'shared/assets/counter.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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
        <AppLink className={`link ${styles.item}`} to="/counter">
          <CounterIcon className={styles.counterIcon} />
          <div className={styles.counterText}>{t('sidebar.counter-page')}</div>
        </AppLink>

      </div>
    </div>
  );
};
