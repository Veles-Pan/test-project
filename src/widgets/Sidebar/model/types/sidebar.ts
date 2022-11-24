import { FC, SVGProps } from 'react';

export interface SidebarItemProps {
    path: string
    text: string
    collapsed: boolean
    Icon: FC<SVGProps<SVGSVGElement>>
    isAuthOnly?: boolean
}
