import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ContentLoader } from './ContentLoader';

export default {
  title: 'widgets/ContentLoader',
  component: ContentLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ContentLoader>;

const Template: ComponentStory<typeof ContentLoader> = (args) => <ContentLoader {...args} />;

export const ContentLoaderDefault = Template.bind({});
ContentLoaderDefault.args = {};

export const ContentLoaderDark = Template.bind({});
ContentLoaderDark.args = {};

ContentLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
