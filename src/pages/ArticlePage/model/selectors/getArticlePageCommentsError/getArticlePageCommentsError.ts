import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageCommentsError = (state: StateSchema) => state?.articlePage?.articlePageComments?.error;
