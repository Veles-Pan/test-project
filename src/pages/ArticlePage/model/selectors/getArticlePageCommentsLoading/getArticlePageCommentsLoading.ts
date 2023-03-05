import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageCommentsLoading = (state: StateSchema) => state?.articlePageComments?.isLoading;
