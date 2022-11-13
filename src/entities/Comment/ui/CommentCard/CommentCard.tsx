import {
  Avatar, classNames, Text, TextThemes,
} from 'shared';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string
}

export const CommentCard = ({ className }: CommentCardProps) => {
  const a = 0;
  return (
    <div className={classNames(styles.card, {}, [className])}>
      <div className={styles.userInfo}>
        <Avatar className={styles.avatar} />
        <div className={styles.nameAndDate}>
          <Text isBold text="Username" />
          <Text theme={TextThemes.ADDITIONAL} text="12.03.1999" />
        </div>

      </div>
      <Text text="comment" />
    </div>
  );
};
