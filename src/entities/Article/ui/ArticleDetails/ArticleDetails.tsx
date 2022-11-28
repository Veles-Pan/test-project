import { RoutePath } from 'app/providers/router/config/routerConfig';
import { useCallback } from 'react';
import {
  AppLink,
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

  const parsedDate = new Date(data.createdAt).toLocaleDateString();

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={styles.info}>
        <div className={styles.details}>
          <div className={styles.iconText}>
            <CalendarIcon className={styles.icon} />
            <Text text={parsedDate} />
          </div>
          <div className={styles.iconText}>
            <ViewsIcon className={styles.icon} />
            <Text text={data.views.toString()} />
          </div>
        </div>
        <Text className={styles.titles} title={data.title} text={data.subtitle} />
        <div className={styles.profile}>
          <Avatar className={styles.avatar} src={data.author?.avatar} />
          <AppLink to={RoutePath.profile + data.authorId} className={styles.authorInfo}>
            <Text isBold text={data.author?.first_name} />
            <Text isBold text={data.author?.last_name} />
          </AppLink>
        </div>

      </div>
      <div className={styles.content}>
        {data.blocks.map((block) => (
          renderBlock(block)
        ))}
      </div>

    </div>
  );
};
