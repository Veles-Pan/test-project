import { Comment } from 'entities/Comment';

export interface CommentFormSchema {
    error?: string;
    isLoading: boolean;
    form?: Comment;
    text?: string;
}
