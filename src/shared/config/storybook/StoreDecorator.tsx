import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
);
