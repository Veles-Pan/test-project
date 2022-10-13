import {
  FC, ReactNode, useMemo, useState,
} from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const currentTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || currentTheme);
  document.body.className = theme;

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => setTheme(theme),
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
