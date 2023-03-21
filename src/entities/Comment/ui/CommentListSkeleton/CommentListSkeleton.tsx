import { classNames, Skeleton } from 'shared';
import styles from './CommentListSkeleton.module.scss';

interface CommentListSkeletonProps {
  className?: string
}

export const CommentListSkeleton = ({ className }: CommentListSkeletonProps) => (
  <div className={classNames(styles.list, {}, [className])}>
    <Skeleton width="100%" height={150} borderRadius={20} />
  </div>
);
