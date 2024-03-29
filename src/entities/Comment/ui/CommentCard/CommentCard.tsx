import { RoutePath } from 'app/providers/router/config/routerConfig';
import {
  AppLink,
  Avatar, classNames, Text, TextThemes,
} from 'shared';
import { Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string
  comment: Comment
}

export const CommentCard = ({ className, comment }: CommentCardProps) => {
  const parsedDate = new Date(comment.date);
  return (
    <div className={classNames(styles.card, {}, [className])}>
      <div className={styles.userInfo}>
        <Avatar src={comment.user.avatar} className={styles.avatar} />
        <div className={styles.nameAndDate}>

          <AppLink to={RoutePath.profile + comment.userId}>
            <Text isBold text={comment.user.username} />
          </AppLink>
          <Text
            theme={TextThemes.ADDITIONAL}
            text={`${parsedDate.toLocaleDateString()}, ${parsedDate.toLocaleTimeString()}`}
          />
        </div>

      </div>
      <div className={styles.content}>
        {comment.text.map((text) => (
          <Text key={text} text={text} />
        ))}

      </div>

    </div>
  );
};
