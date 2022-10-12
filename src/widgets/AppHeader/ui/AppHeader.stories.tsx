import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { AppHeader } from './AppHeader';

export default {
  title: 'widgets/AppHeader',
  component: AppHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = (args) => <AppHeader {...args} />;

export const AppHeaderDefault = Template.bind({});
AppHeaderDefault.args = {};

export const AppHeaderDark = Template.bind({});
AppHeaderDark.args = {};

AppHeaderDark.decorators = [ThemeDecorator(Theme.DARK)];
