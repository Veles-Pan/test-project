import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticleSkeleton } from './ArticleSkeleton';

export default {
  title: 'entities/ArticleSkeleton',
  component: ArticleSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSkeleton>;

const Template: ComponentStory<typeof ArticleSkeleton> = (args) => <ArticleSkeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
