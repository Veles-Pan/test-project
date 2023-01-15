import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'app/providers/router/config/routerConfig';
import { getUserAuthData } from 'entities/User';
import { ArticlesIcon, CounterIcon, ProfileIcon } from 'shared';
import { SidebarItemProps } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userId) => {
    const sidebarItems: Omit<SidebarItemProps, 'collapsed'>[] = [
      {
        path: RoutePath.counter,
        text: 'sidebar.counter-page',
        Icon: CounterIcon,
      },
      {
        path: RoutePath.articles,
        text: 'sidebar.articles-page',
        Icon: ArticlesIcon,
      },
    ];

    if (userId) {
      sidebarItems.push({
        path: RoutePath.profile + userId,
        text: 'sidebar.profile-page',
        Icon: ProfileIcon,
        isAuthOnly: true,
      });
    }

    return sidebarItems;
  },
);
