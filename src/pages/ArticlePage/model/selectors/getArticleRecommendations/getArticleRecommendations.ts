import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsLoading = (state: StateSchema) => state?.articlePage?.articlePageRecommendations?.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) => state?.articlePage?.articlePageRecommendations?.error;
