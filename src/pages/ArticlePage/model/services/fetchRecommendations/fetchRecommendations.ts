import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

export const fetchRecommendations = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfig<string>
>(
  'articlePage/fetchRecommendations',
  async (props, { extra, rejectWithValue }) => {
    console.log('object');
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _limit: 4,

        },
      });

      console.log(response);

      if (!response.data) {
        throw new Error();
      }

      return await response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with fetching recommendations data');
    }
  },
);
