import { classNames, Text } from 'shared';
import styles from './Comment.module.scss';
import { CommentList } from './CommentList/CommentList';

interface CommentProps {
  className?: string
}

export const Comment = ({ className }: CommentProps) => {
  const a = 0;
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Text title="Comments" />
      <CommentList />
    </div>
  );
};
