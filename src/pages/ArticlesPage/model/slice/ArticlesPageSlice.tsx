import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IArticle, TypesOfArticlesView } from 'entities/Article';
import { LOCAL_STORAGE_TYPE_OF_VIEW } from 'shared';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const initialState: ArticlesPageSchema = {
  isLoading: false,
  ids: [],
  entities: {},
  typeOfView: TypesOfArticlesView.TILE,
};

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesList || articlesAdapter.getInitialState(),
);

export const ArticlesPageSlice = createSlice({
  name: 'article',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setTypeOfView: (state, action: PayloadAction<TypesOfArticlesView>) => {
      state.typeOfView = action.payload;
      localStorage.setItem(LOCAL_STORAGE_TYPE_OF_VIEW, action.payload);
    },
    initState: (state) => {
      state.typeOfView = localStorage
        .getItem(LOCAL_STORAGE_TYPE_OF_VIEW) as TypesOfArticlesView || TypesOfArticlesView.TILE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action: PayloadAction<IArticle[]>,
      ) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = ArticlesPageSlice;
export const { reducer: articlesPageReducer } = ArticlesPageSlice;
