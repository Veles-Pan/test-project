import { RoutePath } from 'app/providers/router/config/routerConfig';
import { FC, SVGProps } from 'react';
import CounterIcon from 'shared/assets/counter.svg';
import ProfileIcon from 'shared/assets/profile.svg';

export interface SidebarItemProps {
    path: string
    text: string
    collapsed: boolean
    Icon: FC<SVGProps<SVGSVGElement>>
    isAuthOnly?: boolean
}

export const sidebarItems: Omit<SidebarItemProps, 'collapsed'>[] = [
  {
    path: RoutePath.counter,
    text: 'sidebar.counter-page',
    Icon: CounterIcon,
  },
  {
    path: RoutePath.profile,
    text: 'sidebar.profile-page',
    Icon: ProfileIcon,
    isAuthOnly: true,
  },
];
