import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonThemes } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Common = Template.bind({});
Common.args = {
  children: 'Text',
};

export const CommonDark = Template.bind({});
CommonDark.args = {
  children: 'Text',
};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Switcher = Template.bind({});
Switcher.args = {
  children: 'Text',
  theme: ButtonThemes.SWITCHER,
};

export const SwitcherDark = Template.bind({});
SwitcherDark.args = {
  children: 'Text',
  theme: ButtonThemes.SWITCHER,
};

SwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clean = Template.bind({});
Clean.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAN,
};

export const CleanDark = Template.bind({});
CleanDark.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAN,
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Reload = Template.bind({});
Reload.args = {
  children: 'Text',
  theme: ButtonThemes.RELOAD,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
};
