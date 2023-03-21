import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppLink, Avatar, Button, classNames, Text, TextAlign, ViewsIcon,
} from 'shared';
import {
  TypesOfArticlesView, IArticle, BlockTypes, ArticleTextBlock,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string
  article: IArticle
  typeOfView: TypesOfArticlesView
}

export const ArticleListItem = memo(({
  className,
  article,
  typeOfView,
}: ArticleListItemProps) => {
  const { t } = useTranslation('articles');
  const articleDate = new Date(article.createdAt).toLocaleDateString();

  if (typeOfView === TypesOfArticlesView.TILE) {
    return (
      <AppLink to={`/articles/${article.id}`} className={classNames(styles.container, {}, [className, styles[typeOfView]])}>
        <Text align={TextAlign.CENTER} className={styles.title} text={article.title} isBold />
        <div className={styles.imageWrapper}>
          <img className={styles.cover} alt="cover" src={article.cover} />
          <Text
            align={TextAlign.RIGHT}
            className={styles.date}
            text={articleDate}
          />
        </div>

        <div className={styles.infoBlock}>
          <Text className={styles.types} text={article.type.join(', ')} />
          <div className={styles.views}>
            <ViewsIcon className={styles.viewsIcon} />
            <Text text={article.views.toString()} />
          </div>

        </div>

        <Text align={TextAlign.CENTER} text={article.subtitle} className={styles.subtitle} />

      </AppLink>
    );
  }

  const textBlock = article.blocks.find((block) => block.type === BlockTypes.TEXT) as ArticleTextBlock;
  const paragraphs = textBlock.paragraphs.map((paragraph, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Text key={index} text={paragraph} />
  ));

  return (
    <div className={classNames(styles.container, {}, [className, styles[typeOfView]])}>
      <div className={styles.header}>
        <div className={styles.authorInfo}>
          <Avatar className={styles.avatar} src={article.author?.avatar} />
          <AppLink to={`/profile/${article.authorId}`}><Text isBold text={article.author?.username} /></AppLink>

        </div>
        <Text
          align={TextAlign.RIGHT}
          className={styles.date}
          text={articleDate}
        />
      </div>

      <div className={styles.articleNames}>
        <Text className={styles.title} title={article.title} />
        <Text className={styles.types} text={article.type.join(', ')} />
      </div>

      <div className={styles.imageWrapper}>
        <img className={styles.cover} alt="cover" src={article.cover} />
      </div>

      {textBlock && (
        <>
          <Text title={textBlock.title} />
          <div className={styles.paragraphs}>
            {paragraphs}
          </div>
        </>
      )}
      <AppLink className={styles.button} to={article.id}>
        <Button>
          {t('read-more')}
        </Button>

      </AppLink>
    </div>
  );
});
