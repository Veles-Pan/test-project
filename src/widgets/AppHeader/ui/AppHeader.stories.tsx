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

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({ user: { authData: undefined } })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: undefined } })];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ user: { authData: undefined } })];

export const DefaultWithUser = Template.bind({});
DefaultWithUser.args = {};
DefaultWithUser.decorators = [StoreDecorator({ user: { authData: 'Test' } })];

export const DarkWithUser = Template.bind({});
DarkWithUser.args = {};

DarkWithUser.decorators = [
  ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: 'Test' } }),
];

export const BlueWithUser = Template.bind({});
BlueWithUser.args = {};

BlueWithUser.decorators = [
  ThemeDecorator(Theme.BLUE), StoreDecorator({ user: { authData: 'Test' } }),
];
