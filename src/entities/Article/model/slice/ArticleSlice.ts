import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleData } from '../services/fetchArticleData/fetchArticleData';
import { IArticle } from '../types/article';
import { ArticleSchema } from '../types/ArticleSchema';

const initialState: ArticleSchema = {
  isLoading: false,
};

export const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: articleActions } = ArticleSlice;
export const { reducer: articleReducer } = ArticleSlice;
