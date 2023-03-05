import { EntityState } from '@reduxjs/toolkit';
import { ArticleSortFields, IArticle, TypesOfArticlesView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
    typeOfView?: TypesOfArticlesView;
    page: number
    limit?: number
    hasMore: boolean
    order: 'asc' | 'desc'
    sort: ArticleSortFields
    search: string
    _inited: boolean
}
