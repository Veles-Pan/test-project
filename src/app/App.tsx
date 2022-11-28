import './styles/main.scss';
import { AppHeader, MobileHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { ContentLoader } from 'widgets/ContentLoader';
import { useAppDispatch } from 'shared';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (
    <div className="app">
      <Suspense fallback={<ContentLoader />}>
        <AppHeader />
        <MobileHeader />
        <AppRouter />
        <Sidebar />
      </Suspense>
    </div>
  );
};

export default App;
