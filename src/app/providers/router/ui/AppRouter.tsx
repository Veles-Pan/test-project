import { Routes, Route } from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import { ContentLoader } from 'widgets/ContentLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routeConfig } from '../config/routerConfig';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !route.authOnly || isAuth), [isAuth]);
  return (
    <Suspense fallback={<ContentLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
