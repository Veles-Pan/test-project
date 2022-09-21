import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Button, classNames } from 'shared';
import { ButtonThemes } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
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
};
