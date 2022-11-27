import { ArticleList, TypesOfArticlesView } from 'entities/Article';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicReducersLoader, ReducersList, useAppDispatch,
} from 'shared';
import { getArticlesListError } from '../model/selectors/getArticlesListError/getArticlesListError';
import { getArticlesListLoading } from '../model/selectors/getArticlesListLoading/getArticlesListLoading';
import { getArticlesListTypeOfView } from '../model/selectors/getArticlesListTypeOfView/getArticlesListTypeOfView';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/ArticlesPageSlice';
import { ArticlesListHeader } from './ArticlesListHeader/ArticlesListHeader';
import styles from './ArticlesPage.module.scss';

const initialRedusers: ReducersList = {
  articlesList: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesListLoading);
  const typeOfView = useSelector(getArticlesListTypeOfView);
  const error = useSelector(getArticlesListError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesList());
      dispatch(articlesPageActions.initState());
    }
  }, [dispatch]);

  const setListViewHandler = () => {
    dispatch(articlesPageActions.setTypeOfView(TypesOfArticlesView.LIST));
  };

  const setTileViewHandler = () => {
    dispatch(articlesPageActions.setTypeOfView(TypesOfArticlesView.TILE));
  };

  return (
    <DynamicReducersLoader reducers={initialRedusers}>
      <div className={styles.container}>
        <ArticlesListHeader
          currentTypeOfView={typeOfView as TypesOfArticlesView}
          setTileView={setTileViewHandler}
          setListView={setListViewHandler}
        />
        <ArticleList error={error} isLoading={isLoading} typeOfView={typeOfView} articles={articles} />
      </div>
    </DynamicReducersLoader>
  );
};

export default ArticlesPage;
