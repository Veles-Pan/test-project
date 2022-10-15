import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const CommonWithValue = Template.bind({});
CommonWithValue.args = {
  value: 'Test Value',
};

export const CommonWithPlaceholder = Template.bind({});
CommonWithPlaceholder.args = {
  placeholder: 'Test Placeholder',
};

export const DarkWithValue = Template.bind({});
DarkWithValue.args = {
  value: 'Test Value',
};
DarkWithValue.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithPlaceholder = Template.bind({});
DarkWithPlaceholder.args = {
  placeholder: 'Test Placeholder',
};
DarkWithPlaceholder.decorators = [ThemeDecorator(Theme.DARK)];
