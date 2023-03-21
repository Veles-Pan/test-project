import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const testFormData = {
  first_name: 'John',
  last_name: 'Doe',
  age: 30,
  email: 'email@example.com',
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({ profile: { form: testFormData, readonly: true } }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { form: testFormData, readonly: true } }),
];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ profile: { form: testFormData, readonly: true } }),
];

export const EditableDefault = Template.bind({});
EditableDefault.args = {};
EditableDefault.decorators = [
  StoreDecorator({ profile: { form: testFormData, readonly: false } }),
];

export const EditableDark = Template.bind({});
EditableDark.args = {};

EditableDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { form: testFormData, readonly: false } }),
];

export const EditableBlue = Template.bind({});
EditableBlue.args = {};

EditableBlue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ profile: { form: testFormData, readonly: false } }),
];
