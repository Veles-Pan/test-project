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

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  children: 'Text',
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

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

export const SwitcherBlue = Template.bind({});
SwitcherBlue.args = {
  children: 'Text',
  theme: ButtonThemes.SWITCHER,
};

SwitcherBlue.decorators = [ThemeDecorator(Theme.BLUE)];

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

export const CleanBlue = Template.bind({});
CleanBlue.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAN,
};
CleanBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Reload = Template.bind({});
Reload.args = {
  children: 'Text',
  theme: ButtonThemes.RELOAD,
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: 'Text',
  theme: ButtonThemes.CANCEL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
};
