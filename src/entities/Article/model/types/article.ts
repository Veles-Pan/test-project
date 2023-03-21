import { Profile } from 'entities/Profile';

export enum ArticleSortFields {
    TITLE = 'title',
    VIEWS = 'views',
    CREATED_AT = 'createdAt',
}

export enum BlockTypes {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export enum ArticleTypes {
    LOREM = 'LOREM',
    IPSUM = 'IPSUM',
    DOLOR = 'DOLOR',
}

export enum TypesOfArticlesView {
    LIST = 'LIST',
    TILE = 'TILE',
}

export interface ArticleBlockBase {
    id: string
    type: BlockTypes
    title?: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: BlockTypes.TEXT
    paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: BlockTypes.IMAGE
    src: string
    alt?: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock

export interface IArticle {
    id: string;
    title: string;
    authorId: string;
    author?: Profile
    subtitle: string;
    cover: string;
    views: number;
    createdAt: string,
    type: ArticleTypes[],
    blocks: ArticleBlock[]
}
