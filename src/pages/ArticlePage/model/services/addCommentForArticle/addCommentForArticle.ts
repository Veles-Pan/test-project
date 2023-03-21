import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleData } from 'entities/Article/model/selectors/getArticleData/getArticleData';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsData } from '../fetchCommentsData/fetchCommentsData';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'article/addCommentForArticle',
  async (commentText, {
    extra, dispatch, rejectWithValue, getState,
  }) => {
    const userData = getUserAuthData(getState());
    const articleData = getArticleData(getState());

    if (!articleData || !userData || !commentText) {
      return rejectWithValue('Not enough data');
    }

    const formatedFormText = commentText.split('\n');

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: articleData.id,
        userId: userData,
        date: new Date(),
        text: formatedFormText,
      });

      if (!response.data) {
        throw new Error();
      }

      //   dispatch(fetchCommentsData(articleData.id));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Server error');
    }
  },
);
