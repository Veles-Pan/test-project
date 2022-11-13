import { classNames } from 'shared';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string
  comments?: Comment[]
}

export const CommentList = ({ className, comments }: CommentListProps) => {
  if (!comments?.length) {
    return null;
  }

  return (
    <div className={classNames(styles.list, {}, [className])}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
