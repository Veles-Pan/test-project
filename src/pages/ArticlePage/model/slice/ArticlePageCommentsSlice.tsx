import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { fetchCommentsData } from '../services/fetchCommentsData/fetchCommentsData';
import { ArticlePageCommentsSchema } from '../types/ArticlePageCommentsSchema';

const initialState: ArticlePageCommentsSchema = {
  isLoading: false,
  ids: [],
  entities: {},
};

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articlePageComments || commentsAdapter.getInitialState(),
);

export const ArticlePageCommentsSlice = createSlice({
  name: 'article',
  initialState: commentsAdapter.getInitialState<ArticlePageCommentsSchema>(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsData.fulfilled, (
        state,
        action: PayloadAction<Comment[]>,
      ) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlePageCommentsActions } = ArticlePageCommentsSlice;
export const { reducer: articlePageCommentsReducer } = ArticlePageCommentsSlice;
