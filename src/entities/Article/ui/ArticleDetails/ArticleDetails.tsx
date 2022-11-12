import { useCallback } from 'react';
import {
  Avatar, CalendarIcon, classNames, Text, ViewsIcon,
} from 'shared';
import { ArticleBlock, BlockTypes, IArticle } from '../../model/types/article';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string
  data: IArticle
}

export const ArticleDetails = ({ className, data }: ArticleDetailsProps) => {
  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case BlockTypes.TEXT:
      return <ArticleTextBlockComponent key={block.id} data={block} />;
    case BlockTypes.IMAGE:
      return <ArticleImageBlockComponent key={block.id} data={block} />;
    default:
      return null;
    }
  }, []);

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={styles.info}>
        <div className={styles.details}>
          <div className={styles.iconText}>
            <CalendarIcon className={styles.icon} />
            <Text text={data.createdAt} />
          </div>
          <div className={styles.iconText}>
            <ViewsIcon className={styles.icon} />
            <Text text={data.views.toString()} />
          </div>
          <Text className={styles.share} text="Share this article" />
        </div>
        <Text className={styles.titles} title={data.title} text={data.subtitle} />
        <div className={styles.profile}>
          <Avatar className={styles.avatar} src={data.author?.avatar} />
          <div className={styles.authorInfo}>
            <Text text={data.author?.first_name} />
            <Text text={data.author?.last_name} />
          </div>
        </div>

      </div>
      <div className={styles.content}>
        {data.blocks.map((block) => (
          renderBlock(block)
        ))}
        {/* <Skeleton width="100%" height="100%" borderRadius={20} /> */}
      </div>

    </div>
  );
};
