import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import ArticlePage from './ArticlePage';

export default {
  title: 'pages/ArticlePage',
  component: ArticlePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />;

const testComments = {
  first_name: 'John',
  last_name: 'Doe',
  age: 30,
  email: 'email@example.com',
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({ commentForm: { text: '' } }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ commentForm: { text: '' } }),
];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ commentForm: { text: '' } }),
];

export const WithCommentsDefault = Template.bind({});
WithCommentsDefault.args = {};
WithCommentsDefault.decorators = [
  StoreDecorator({ commentForm: { text: 'Test Comment' } }),
];

export const WithCommentsDark = Template.bind({});
WithCommentsDark.args = {};

WithCommentsDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ commentForm: { text: 'Test Comment' } }),
];

export const WithCommentsBlue = Template.bind({});
WithCommentsBlue.args = {};

WithCommentsBlue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ commentForm: { text: 'Test Comment' } }),
];
