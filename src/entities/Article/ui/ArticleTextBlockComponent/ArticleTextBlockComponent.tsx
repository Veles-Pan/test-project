import { classNames, Text } from 'shared';
import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
  className?: string
  data: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, data }: ArticleTextBlockProps) => (
  <div className={classNames(styles.container, {}, [className])}>
    {data.title && <Text title={data.title} />}

    {data.paragraphs.map((paragraph) => (
      <Text key={paragraph} text={paragraph} />
    ))}

  </div>
);
