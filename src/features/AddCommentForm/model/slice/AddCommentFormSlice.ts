import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/CommentFormSchema';

const initialState: CommentFormSchema = {
  isLoading: false,
};

export const AddCommentFormSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentFormActions } = AddCommentFormSlice;
export const { reducer: addCommentFormReducer } = AddCommentFormSlice;
