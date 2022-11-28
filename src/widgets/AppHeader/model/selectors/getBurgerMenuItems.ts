import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'app/providers/router/config/routerConfig';
import { getUserAuthData } from 'entities/User';
import { BurgerMenuItemProps } from '../types/burgerMenu';

export const getBurgerMenuItems = createSelector(
  getUserAuthData,
  (userId) => {
    const sidebarItems: Omit<BurgerMenuItemProps, 'collapsed'>[] = [
      {
        path: RoutePath.main,
        text: 'burgerMenu.main-page',
      },
      {
        path: RoutePath.counter,
        text: 'burgerMenu.counter-page',
      },
      {
        path: RoutePath.articles,
        text: 'burgerMenu.articles-page',
      },
    ];

    if (userId) {
      sidebarItems.push({
        path: RoutePath.profile + userId,
        text: 'burgerMenu.profile-page',
        isAuthOnly: true,
      });
    }

    return sidebarItems;
  },
);
