import { ArticleList, TypesOfArticlesView } from 'entities/Article';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicReducersLoader, Page, ReducersList, useAppDispatch,
} from 'shared';
import { getArticlesListError } from '../model/selectors/getArticlesListError/getArticlesListError';
import { getArticlesListHasMore } from '../model/selectors/getArticlesListHasMore/getArticlesListHasMore';
import { getArticlesListInited } from '../model/selectors/getArticlesListInited/getArticlesListInited';
import { getArticlesListLoading } from '../model/selectors/getArticlesListLoading/getArticlesListLoading';
import { getArticlesListPage } from '../model/selectors/getArticlesListPage/getArticlesListPage';
import { getArticlesListTypeOfView } from '../model/selectors/getArticlesListTypeOfView/getArticlesListTypeOfView';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
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
  const inited = useSelector(getArticlesListInited);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && !inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }, [dispatch, inited]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const setListViewHandler = useCallback(() => {
    dispatch(articlesPageActions.setTypeOfView(TypesOfArticlesView.LIST));
  }, [dispatch]);

  const setTileViewHandler = useCallback(() => {
    dispatch(articlesPageActions.setTypeOfView(TypesOfArticlesView.TILE));
  }, [dispatch]);

  return (
    <DynamicReducersLoader reducers={initialRedusers}>
      <Page onScrollEnd={onLoadNextPart} className={styles.container}>
        <ArticlesListHeader
          currentTypeOfView={typeOfView as TypesOfArticlesView}
          setTileView={setTileViewHandler}
          setListView={setListViewHandler}
        />
        <ArticleList error={error} isLoading={isLoading} typeOfView={typeOfView} articles={articles} />
      </Page>
    </DynamicReducersLoader>
  );
};

export default ArticlesPage;
