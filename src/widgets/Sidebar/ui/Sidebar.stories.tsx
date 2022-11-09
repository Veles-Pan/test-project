import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [
  StoreDecorator({
    user: { authData: '123' },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: '123' },
  }),
];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({
    user: { authData: '123' },
  }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {
};
NoAuth.decorators = [
  StoreDecorator({
    user: { },
  }),
];
