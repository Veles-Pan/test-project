import { classNames, Text, TextThemes } from 'shared';
import { AddComentForm } from 'features/AddCommentForm';
import { useTranslation } from 'react-i18next';
import styles from './Comments.module.scss';
import { Comment } from '../model/types/comment';
import { CommentList } from './CommentList/CommentList';
import { CommentListSkeleton } from './CommentListSkeleton/CommentListSkeleton';

interface CommentsProps {
  className?: string
  comments?: Comment[]
  error?: string
  isLoading?: boolean
  onSendComment: (text: string) => void
}

export const Comments = ({
  className, comments, isLoading, error, onSendComment,
}: CommentsProps) => {
  const { t } = useTranslation('article');

  if (error) {
    return (
      <div className={classNames(styles.container, {}, [className])}>
        <Text title={error} theme={TextThemes.ERROR} />
      </div>
    );
  }
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <AddComentForm onSendComment={onSendComment} />
      <Text title={t('comments.comments')} />

      {isLoading && <div className={classNames(styles.container, {}, [className])}><CommentListSkeleton /></div>}
      {error && (
        <div className={classNames(styles.container, {}, [className])}>
          <Text title={error} theme={TextThemes.ERROR} />
        </div>
      )}
      {!isLoading && !error && (<CommentList comments={comments} />)}

    </div>
  );
};
