import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { NavBar } from './NavBar';

export default {
  title: 'widgets/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavBarDefault = Template.bind({});
NavBarDefault.args = {
};

export const NavBarDark = Template.bind({});
NavBarDark.args = {

};
NavBarDark.decorators = [ThemeDecorator(Theme.DARK)];
