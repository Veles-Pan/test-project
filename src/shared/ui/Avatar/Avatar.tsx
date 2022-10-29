import { useState } from 'react';
import { classNames } from 'shared';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
}

const DEFAULT_AVATAR = 'https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png';

export const Avatar = ({
  className,
  src = DEFAULT_AVATAR,
  alt,
}: AvatarProps) => {
  const [isError, setIsError] = useState(false);

  return (

    <img
      onError={() => setIsError(true)}
      src={isError ? DEFAULT_AVATAR : src}
      alt={alt}
      className={classNames(styles.avatar, {}, [className])}
    />
  );
};
