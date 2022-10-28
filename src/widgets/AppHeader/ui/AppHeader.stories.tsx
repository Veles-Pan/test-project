import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
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
AppHeaderDefault.decorators = [StoreDecorator({ user: { authData: undefined } })];

export const AppHeaderDark = Template.bind({});
AppHeaderDark.args = {};

AppHeaderDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: undefined } })];

export const AppHeaderDefaultWithUser = Template.bind({});
AppHeaderDefaultWithUser.args = {};
AppHeaderDefaultWithUser.decorators = [StoreDecorator({ user: { authData: 'Test' } })];

export const AppHeaderDarkWithUser = Template.bind({});
AppHeaderDarkWithUser.args = {};

AppHeaderDarkWithUser.decorators = [
  ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: 'Test' } }),
];
