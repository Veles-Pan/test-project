import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSort,
  getArticlesListPage,
  getArticlesListLimit,
} from 'pages/ArticlesPage';

interface fetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  fetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, { extra, rejectWithValue, getState }) => {
    const page = getArticlesListPage(getState());
    const limit = getArticlesListLimit(getState());
    const order = getArticlesListOrder(getState());
    const search = getArticlesListSearch(getState());
    const sort = getArticlesListSort(getState());
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      const getUserData = async (userId: string) => {
        const response = await extra.api.get(`/profiles/${userId}`);
        return response.data;
      };

      const dataWithAuthor = Promise.all(
        response.data.map(async (article) => {
          const authorData = await getUserData(article.authorId);
          return {
            ...article,
            author: authorData,
          };
        }),
      );

      return await dataWithAuthor;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with fetching comments data');
    }
  },
);
