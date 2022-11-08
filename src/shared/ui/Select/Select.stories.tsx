import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Common = Template.bind({});
Common.args = {
  label: 'Label',
  options: [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2' },
  ],
};

export const CommonDark = Template.bind({});
CommonDark.args = {
  label: 'Label',
  options: [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2' },
  ],
};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
  label: 'Label',
  options: [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2' },
  ],
  isReadonly: true,
};
