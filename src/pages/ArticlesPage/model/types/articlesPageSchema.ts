import { EntityState } from '@reduxjs/toolkit';
import { IArticle, TypesOfArticlesView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
    typeOfView?: TypesOfArticlesView;
    page: number
    limit?: number
    hasMore: boolean
}
