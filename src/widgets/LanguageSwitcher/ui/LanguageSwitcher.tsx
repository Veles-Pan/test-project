import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames } from 'shared';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string
  isOpen?: boolean
}

export const LanguageSwitcher = memo(({
  className,
  isOpen,
}: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames(
        styles.langSwither,
        {
          [styles.langSwitherFull]: isOpen,
          [styles.langSwitherColladsed]: !isOpen,
        },
        [className],
      )}
    >
      <span
        className={styles.button}
        data-content={t('sidebar.another-langiage')}
        data-content-short={t('sidebar.another-langiage-short')}
      />
    </Button>
  );
});
