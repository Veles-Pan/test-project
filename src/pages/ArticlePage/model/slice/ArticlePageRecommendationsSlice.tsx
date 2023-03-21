import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { fetchCommentsData } from '../services/fetchCommentsData/fetchCommentsData';
import { fetchRecommendations } from '../services/fetchRecommendations/fetchRecommendations';
import { ArticlePageRecommendationsSchema } from '../types/articlePageRecommendationsSchema';

const initialState: ArticlePageRecommendationsSchema = {
  isLoading: false,
  ids: [],
  entities: {},
};

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage?.articlePageRecommendations || recommendationsAdapter.getInitialState(),
);

export const ArticlePageRecommendationsSlice = createSlice({
  name: 'article',
  initialState: recommendationsAdapter.getInitialState<ArticlePageRecommendationsSchema>(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlePageRecommendationsActions } = ArticlePageRecommendationsSlice;
export const { reducer: articlePageRecommendationsReducer } = ArticlePageRecommendationsSlice;
