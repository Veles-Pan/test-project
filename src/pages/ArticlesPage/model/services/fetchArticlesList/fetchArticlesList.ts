import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { getArticlesListLimit } from '../../selectors/getArticlesListLimit/getArticlesListLimit';

interface fetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<IArticle[], fetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, { extra, rejectWithValue, getState }) => {
    const { page = 1 } = props;
    const limit = getArticlesListLimit(getState());
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _limit: limit,
          _page: page,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      const getUserData = async (userId: string) => {
        const response = await extra.api.get(`/profiles/${userId}`);
        return response.data;
      };

      const dataWithAuthor = Promise.all(response.data.map(async (article) => {
        const authorData = await getUserData(article.authorId);
        return {
          ...article,
          author: authorData,
        };
      }));

      return await dataWithAuthor;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with fetching comments data');
    }
  },
);
