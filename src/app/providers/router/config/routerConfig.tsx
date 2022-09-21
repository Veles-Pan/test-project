import { CounterPage } from 'pages/CounterPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  COUNTER = 'counter'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.COUNTER]: '/counter'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />
  },
  [AppRoutes.COUNTER]: {
    path: RoutePath[AppRoutes.COUNTER],
    element: <CounterPage />
  }
}
