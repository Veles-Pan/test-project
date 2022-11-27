import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesListTypeOfView = (state: StateSchema) => state?.articlesList?.typeOfView;
