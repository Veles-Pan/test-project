import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '../config/routerConfig';

export function RequireAuth({ children }: {children: JSX.Element}) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  return auth ? children : <Navigate to={RoutePath.main} state={{ from: location }} replace />;
}
