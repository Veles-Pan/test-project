import { classNames, Text, TextThemes } from 'shared';
import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockProps {
  className?: string
  data: ArticleImageBlock
}

export const ArticleImageBlockComponent = ({ className, data }: ArticleImageBlockProps) => (
  <div className={classNames(styles.container, {}, [className])}>
    <img className={styles.image} src={data.src} alt={data.alt} />
    {data.title && <Text theme={TextThemes.DESCRIPTION} text={data.title} />}
  </div>
);
