import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { LanguageSwitcher } from './LanguageSwitcher';

export default {
  title: 'widgets/LanguageSwitcher',
  component: LanguageSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />;

export const LanguageSwitcherDefault = Template.bind({});
LanguageSwitcherDefault.args = {};

export const LanguageSwitcherDark = Template.bind({});
LanguageSwitcherDark.args = {};

LanguageSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
