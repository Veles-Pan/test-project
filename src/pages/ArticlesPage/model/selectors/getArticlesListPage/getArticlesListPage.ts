import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListPage = (state: StateSchema) => state?.articlesList?.page || 1;
