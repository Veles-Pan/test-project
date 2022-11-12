import { classNames } from 'shared';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string
}

export const ArticleTextBlock = ({ className }: ArticleTextBlockProps) => {
  const a = 0;
  return (
    <div className={classNames(styles.container, {}, [className])} />
  );
};
