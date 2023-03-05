import { FC, lazy } from 'react';
import { EditAvatarProps } from './EditAvatar';

export const EditAvatarAsync = lazy<FC<EditAvatarProps>>(() => import('./EditAvatar'));
