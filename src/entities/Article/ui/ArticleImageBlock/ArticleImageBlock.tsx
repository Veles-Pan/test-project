import { classNames } from 'shared';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string
}

export const ArticleImageBlock = ({ className }: ArticleImageBlockProps) => {
  const a = 0;
  return (
    <div className={classNames(styles.container, {}, [className])} />
  );
};
