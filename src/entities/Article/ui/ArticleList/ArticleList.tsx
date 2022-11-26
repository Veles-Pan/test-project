import { memo } from 'react';
import { classNames } from 'shared';
import { TypesOfArticlesView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  typeOfView?: TypesOfArticlesView
}

export const ArticleList = memo(({
  className, articles, isLoading, typeOfView = TypesOfArticlesView.LIST,
}: ArticleListProps) => {
  if (isLoading) {
    const numberOfSkeletons = typeOfView === TypesOfArticlesView.TILE ? 6 : 2;
    const skeletonItems = Array.from({ length: numberOfSkeletons }, (_, index) => (
      <ArticleListItemSkeleton key={index} typeOfView={typeOfView} />
    ));
    return (
      <div className={classNames(styles.container, {}, [className, styles[typeOfView]])}>
        {skeletonItems}
      </div>
    );
  }
  const renderArticle = (article: IArticle) => (
    <ArticleListItem
      key={article.id}
      article={article}
      typeOfView={typeOfView}
    />
  );

  return (
    <div className={classNames(styles.container, {}, [className, styles[typeOfView]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
