import { Profile } from 'entities/Profile';

export interface Comment {
    id: string,
    text: string[],
    articleId: string,
    userId: string
    user: Profile
    date: Date
}
