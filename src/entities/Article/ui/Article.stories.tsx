import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticleTypes, BlockTypes, IArticle } from '../model/types/article';

import { Article } from './Article';

export default {
  title: 'entities/Article',
  component: Article,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Article>;

const data: IArticle = {
  id: '1',
  title: 'Article title',
  subtitle: 'Article subtitle',
  createdAt: '2021-01-01',
  views: 100,
  cover: 'https://picsum.photos/200/300',
  type: [ArticleTypes.LOREM],
  authorId: '1',
  author: {
    first_name: 'John',
    last_name: 'Doe',
  },
  blocks: [
    {
      id: '1',
      type: BlockTypes.TEXT,
      paragraphs: ['Paragraph 1', 'Paragraph 2'],
    },
  ],
};

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [StoreDecorator({ article: { data } })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ article: { data } })];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ article: { data } })];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [StoreDecorator({ article: { isLoading: true } })];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};

DarkLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ article: { isLoading: true } })];

export const BlueLoading = Template.bind({});
BlueLoading.args = {};

BlueLoading.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ article: { isLoading: true } })];

export const Error = Template.bind({});
Error.args = {};

Error.decorators = [StoreDecorator({ article: { error: 'Storybook error' } })];

export const DarkError = Template.bind({});
DarkError.args = {};

DarkError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ article: { error: 'Storybook error' } })];

export const BlueError = Template.bind({});
BlueError.args = {};

BlueError.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ article: { error: 'Storybook error' } })];
