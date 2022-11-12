import { Profile } from 'entities/Profile';

export enum BlockTypes {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

enum ArticleTypes {
    LOREM = 'LOREM',
    IPSUM = 'IPSUM',
    DOLOR = 'DOLOR',
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
