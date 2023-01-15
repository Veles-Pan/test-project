import { ArticlePage } from 'pages/ArticlePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { CounterPage } from 'pages/CounterPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  COUNTER = 'counter',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE = 'article',
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.COUNTER]: '/counter',
  [AppRoutes.PROFILE]: '/profile/', // /profile/:id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE]: '/articles/', // /articles/:id
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.COUNTER]: {
    path: RoutePath[AppRoutes.COUNTER],
    element: <CounterPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
  },
  [AppRoutes.ARTICLE]: {
    path: `${RoutePath[AppRoutes.ARTICLE]}:id`,
    element: <ArticlePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
