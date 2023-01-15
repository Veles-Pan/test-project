import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListHasMore = (state: StateSchema) => state?.articlesList?.hasMore;
