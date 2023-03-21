import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListInited = (state: StateSchema) => state?.articlesList?._inited;
