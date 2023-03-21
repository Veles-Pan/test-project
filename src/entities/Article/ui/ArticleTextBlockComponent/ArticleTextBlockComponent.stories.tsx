import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleTextBlock, BlockTypes } from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
  title: 'entities/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const data: ArticleTextBlock = {
  id: '1',
  type: BlockTypes.TEXT,
  title: 'First Block Title',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit. Id donec ultrices tincidunt arcu non sodales neque sodales.',
    'Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Massa ultricies mi quis hendrerit dolor magna eget. Nec feugiat nisl pretium fusce id. Pellentesque id nibh tortor id aliquet. Mi tempus imperdiet nulla malesuada pellentesque elit. Vitae ultricies leo integer malesuada nunc vel risus. Libero volutpat sed cras ornare arcu dui vivamus. Tincidunt vitae semper quis lectus nulla at.',
    'Risus sed vulputate odio ut enim blandit volutpat. Pellentesque sit amet porttitor eget. Ac tincidunt vitae semper quis lectus nulla. Interdum varius sit amet mattis. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.',
  ],
};

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

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
