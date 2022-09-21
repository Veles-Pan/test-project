import './styles/main.scss';
import { classNames } from 'shared';
import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <AppHeader />
        <AppRouter />
        <Sidebar />
      </Suspense>
    </div>
  );
};

export default App;
