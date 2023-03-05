import { useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes, classNames } from 'shared';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonThemes.SWITCHER}
    >
      {t('header.change-theme')}
    </Button>
  );
});
