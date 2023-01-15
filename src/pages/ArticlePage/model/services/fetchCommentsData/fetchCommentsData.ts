import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsData = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'article/fetchCommentsData',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      if (!articleId) {
        throw new Error('Article ID is not provided');
      }
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      const getUserData = async (userId: string) => {
        const response = await extra.api.get(`/profiles/${userId}`);
        return response.data;
      };

      const dataWithUsers = Promise.all(response.data.map(async (comment) => {
        const authorData = await getUserData(comment.userId);
        return {
          ...comment,
          user: authorData,
        };
      }));

      return await dataWithUsers;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error with fetching comments data');
    }
  },
);
