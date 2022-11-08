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

export const SidebarDefault = Template.bind({});
SidebarDefault.args = {
};
SidebarDefault.decorators = [
  StoreDecorator({
    user: { authData: '123' },
  }),
];

export const SidebarDark = Template.bind({});
SidebarDark.args = {

};
SidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: '123' },
  }),
];

export const SidebarNoAuth = Template.bind({});
SidebarNoAuth.args = {
};
SidebarNoAuth.decorators = [
  StoreDecorator({
    user: { },
  }),
];
