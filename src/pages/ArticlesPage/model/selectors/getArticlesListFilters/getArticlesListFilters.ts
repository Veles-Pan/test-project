import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFields } from 'entities/Article';

export const getArticlesListTypeOfView = (state: StateSchema) => state?.articlesList?.typeOfView;

export const getArticlesListOrder = (state: StateSchema) => state?.articlesList?.order ?? 'asc';

export const getArticlesListSort = (state: StateSchema) => state?.articlesList?.sort ?? ArticleSortFields.CREATED_AT;

export const getArticlesListSearch = (state: StateSchema) => state?.articlesList?.search ?? '';
