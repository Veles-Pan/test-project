import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListLimit = (state: StateSchema) => state?.articlesList?.limit || 12;
