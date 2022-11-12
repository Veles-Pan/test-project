import { Routes, Route } from 'react-router-dom';
import { Suspense, useCallback } from 'react';
import { ContentLoader } from 'widgets/ContentLoader';
import { AppRouteProps, routeConfig } from '../config/routerConfig';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const InnerElement = (
      <Suspense fallback={<ContentLoader />}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{InnerElement}</RequireAuth> : InnerElement}
      />
    );
  }, []);
  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default AppRouter;
