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
  error?: string
  typeOfView?: TypesOfArticlesView
}

const getSkeletonItems = (typeOfView: TypesOfArticlesView) => Array.from(
  { length: typeOfView === TypesOfArticlesView.TILE ? 4 : 2 },
  (_, index) => (
    <ArticleListItemSkeleton key={index} typeOfView={typeOfView} />
  ),
);

export const ArticleList = memo(({
  className, articles, isLoading, error, typeOfView = TypesOfArticlesView.LIST,
}: ArticleListProps) => {
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
      {isLoading && getSkeletonItems(typeOfView)}
    </div>
  );
});
