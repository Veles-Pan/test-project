import { classNames } from 'shared';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string
}

export const CommentList = ({ className }: CommentListProps) => {
  const a = 0;
  return (
    <div className={classNames(styles.list, {}, [className])}>
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};
