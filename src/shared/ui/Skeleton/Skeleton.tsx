import { CSSProperties } from 'react';
import { classNames } from 'shared';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string
  height?: number | string
  width?: number | string
  borderRadius?: number | string
}

export const Skeleton = ({
  className, height, width, borderRadius,
}: SkeletonProps) => {
  const style: CSSProperties = {
    height,
    width,
    borderRadius,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  };
  return (
    <div style={style} className={classNames(styles.skeleton, {}, [className])} />
  );
};
