import { combineReducers } from '@reduxjs/toolkit';
import { articlePageCommentsReducer } from './ArticlePageCommentsSlice';
import { articlePageRecommendationsReducer } from './ArticlePageRecommendationsSlice';

export const articlePageReducer = combineReducers({
  articlePageComments: articlePageCommentsReducer,
  articlePageRecommendations: articlePageRecommendationsReducer,
});
