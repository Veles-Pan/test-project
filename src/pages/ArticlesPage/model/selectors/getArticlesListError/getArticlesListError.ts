import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListError = (state: StateSchema) => state?.articlesList?.error;
