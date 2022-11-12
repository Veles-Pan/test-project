import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  classNames, DynamicReducersLoader, ReducersList, Text, TextThemes, useAppDispatch,
} from 'shared';
import { getArticleData } from '../model/selectors/getArticleData/getArticleData';
import { getArticleError } from '../model/selectors/getArticleError/getArticleError';
import { getArticleLoading } from '../model/selectors/getArticleLoading/getArticleLoading';
import { fetchArticleData } from '../model/services/fetchArticleData/fetchArticleData';
import { articleReducer } from '../model/slice/articleSlice';
import styles from './Article.module.scss';
import { ArticleSkeleton } from './ArticleSkeleton/ArticleSceleton';

interface ArticleProps {
  className?: string
  id: string
}

const initialRedusers: ReducersList = {
  article: articleReducer,
};

export const Article = memo(({ className, id }: ArticleProps) => {
  const dispatch = useAppDispatch();
  // const isLoading = useSelector(getArticleLoading);
  const isLoading = true;
  const error = useSelector(getArticleError);
  const data = useSelector(getArticleData);

  useEffect(() => {
    dispatch(fetchArticleData(id));
  }, [dispatch, id]);

  let content: JSX.Element | null;

  if (isLoading) {
    content = <ArticleSkeleton />;
  } else if (error) {
    content = <Text title={error} theme={TextThemes.ERROR} />;
  } else {
    content = <div>{data?.title}</div>;
  }

  return (
    <DynamicReducersLoader reducers={initialRedusers}>
      <div className={classNames(styles.container, {}, [className])}>
        {content}
      </div>

    </DynamicReducersLoader>
  );
});
