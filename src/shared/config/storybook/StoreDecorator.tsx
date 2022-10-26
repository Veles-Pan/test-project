import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducersList } from 'shared/components/DynamicReducersLoader/DynamicReducersLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={defaultAsyncReducers}>
    <StoryComponent />
  </StoreProvider>
);
