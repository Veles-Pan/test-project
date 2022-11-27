import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListLoading = (state: StateSchema) => state?.articlesList?.isLoading;
