import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Input, InputThemes } from './Input';

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

export const CommonWithError = Template.bind({});
CommonWithError.args = {
  value: 'Test Value',
  theme: InputThemes.ERROR,
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

export const DarkWithError = Template.bind({});
DarkWithError.args = {
  value: 'Test Value',
  theme: InputThemes.ERROR,
};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueWithValue = Template.bind({});
BlueWithValue.args = {
  value: 'Test Value',
};
BlueWithValue.decorators = [ThemeDecorator(Theme.BLUE)];

export const BlueWithPlaceholder = Template.bind({});
BlueWithPlaceholder.args = {
  placeholder: 'Test Placeholder',
};
BlueWithPlaceholder.decorators = [ThemeDecorator(Theme.BLUE)];

export const BlueWithError = Template.bind({});
BlueWithError.args = {
  value: 'Test Value',
  theme: InputThemes.ERROR,
};
BlueWithError.decorators = [ThemeDecorator(Theme.BLUE)];
