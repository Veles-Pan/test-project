import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IArticle[]>('/articles');

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
