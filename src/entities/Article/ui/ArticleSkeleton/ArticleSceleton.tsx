import { classNames, Skeleton } from 'shared';
import styles from './ArticleSkeleton.module.scss';

interface ArticleSkeletonProps {
  className?: string
}

export const ArticleSkeleton = ({ className }: ArticleSkeletonProps) => (
  <div className={classNames(styles.container, {}, [className])}>
    <div className={styles.info}>
      <Skeleton width="100%" height="20%" borderRadius={20} />
      <Skeleton width="100%" height="40%" borderRadius={20} />
      <div className={styles.profile}>
        <Skeleton className={styles.avatar} width={50} height="100%" borderRadius="50%" />
        <Skeleton width="100%" height="100%" borderRadius={20} />
      </div>

    </div>
    <div className={styles.content}>
      <Skeleton width="100%" height="100%" borderRadius={20} />
    </div>

  </div>
);
