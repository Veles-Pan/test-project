import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { articlePageReducer } from 'pages/ArticlePage';
import { ReducersList } from 'shared/components/DynamicReducersLoader/DynamicReducersLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articlePage: articlePageReducer,
  commentForm: addCommentFormReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={defaultAsyncReducers}>
    <StoryComponent />
  </StoreProvider>
);
