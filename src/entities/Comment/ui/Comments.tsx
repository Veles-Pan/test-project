import { classNames, Text, TextThemes } from 'shared';
import styles from './Comments.module.scss';
import { Comment } from '../model/types/comment';
import { CommentList } from './CommentList/CommentList';
import { CommentListSkeleton } from './CommentListSkeleton/CommentListSkeleton';

interface CommentsProps {
  className?: string
  comments?: Comment[]
  error?: string
  isLoading?: boolean
}

export const Comments = ({
  className, comments, isLoading, error,
}: CommentsProps) => {
  if (isLoading) {
    return <div className={classNames(styles.container, {}, [className])}><CommentListSkeleton /></div>;
  }
  if (error) {
    return (
      <div className={classNames(styles.container, {}, [className])}>
        <Text title={error} theme={TextThemes.ERROR} />
      </div>
    );
  }
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Text title="Comments" />
      <CommentList comments={comments} />
    </div>
  );
};
