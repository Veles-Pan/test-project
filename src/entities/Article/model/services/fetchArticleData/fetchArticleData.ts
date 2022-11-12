import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleData = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
  'article/fetchArticleData',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with fetching article data');
    }
  },
);
