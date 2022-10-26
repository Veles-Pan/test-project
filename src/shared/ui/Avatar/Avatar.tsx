import { classNames } from 'shared';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
}

export const Avatar = ({
  className,
  src = 'https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png',
  alt,
}: AvatarProps) => (
  <img src={src} alt={alt} className={classNames(styles.avatar, {}, [className])} />
);
