import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesListHasMore } from '../../selectors/getArticlesListHasMore/getArticlesListHasMore';
import { getArticlesListLoading } from '../../selectors/getArticlesListLoading/getArticlesListLoading';
import { getArticlesListPage } from '../../selectors/getArticlesListPage/getArticlesListPage';
import { articlesPageActions } from '../../slice/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, { getState, dispatch }) => {
    const hasMore = getArticlesListHasMore(getState());
    const page = getArticlesListPage(getState());
    const isLoading = getArticlesListLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  },
);
