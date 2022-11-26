import { memo } from 'react';
import {
  classNames, Skeleton,
} from 'shared';
import {
  TypesOfArticlesView,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string
  typeOfView: TypesOfArticlesView
}

export const ArticleListItemSkeleton = memo(({
  className,
  typeOfView,
}: ArticleListItemProps) => {
  if (typeOfView === TypesOfArticlesView.TILE) {
    return (
      <Skeleton height={400} className={classNames(styles.container, {}, [className, styles[typeOfView]])} />
    );
  }

  return (
    <Skeleton height={700} className={classNames(styles.container, {}, [className, styles[typeOfView]])} />
  );
});
