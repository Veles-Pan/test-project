import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleImageBlock, BlockTypes } from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
  title: 'entities/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const data: ArticleImageBlock = {
  id: '3',
  type: BlockTypes.IMAGE,
  src: 'https://i.imgur.com/5nXhs2L.png',
  title: ' Diam quis enim lobortis scelerisque fermentum dui.',
};

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
};

export const Dark = Template.bind({});
Dark.args = {
  data,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  data,
};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
