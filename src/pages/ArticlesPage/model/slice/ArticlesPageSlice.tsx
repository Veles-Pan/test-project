import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  ArticleSortFields,
  IArticle,
  TypesOfArticlesView,
} from 'entities/Article';
import { LOCAL_STORAGE_TYPE_OF_VIEW } from 'shared';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const initialState: ArticlesPageSchema = {
  isLoading: false,
  ids: [],
  entities: {},
  typeOfView: TypesOfArticlesView.TILE,
  hasMore: true,
  page: 1,
  search: '',
  order: 'asc',
  sort: ArticleSortFields.CREATED_AT,
  _inited: false,
};

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesList || articlesAdapter.getInitialState(),
);

export const ArticlesPageSlice = createSlice({
  name: 'article',
  initialState:
    articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setTypeOfView: (state, action: PayloadAction<TypesOfArticlesView>) => {
      state.typeOfView = action.payload;
      localStorage.setItem(LOCAL_STORAGE_TYPE_OF_VIEW, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortFields>) => {
      state.sort = action.payload;
    },
    initState: (state) => {
      const typeOfView = localStorage.getItem(
        LOCAL_STORAGE_TYPE_OF_VIEW,
      ) as TypesOfArticlesView;
      state.typeOfView = typeOfView || TypesOfArticlesView.TILE;
      state.limit = state.typeOfView === TypesOfArticlesView.TILE ? 12 : 3;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length > 0;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = ArticlesPageSlice;
export const { reducer: articlesPageReducer } = ArticlesPageSlice;
