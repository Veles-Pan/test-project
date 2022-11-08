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

export const ProfilePageDefault = Template.bind({});
ProfilePageDefault.args = {};
ProfilePageDefault.decorators = [
  StoreDecorator({ profile: { form: testFormData, readonly: true } }),
];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};

ProfilePageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { form: testFormData, readonly: true } }),
];

export const ProfilePageEditableDefault = Template.bind({});
ProfilePageEditableDefault.args = {};
ProfilePageEditableDefault.decorators = [
  StoreDecorator({ profile: { form: testFormData, readonly: false } }),
];

export const ProfilePageEditableDark = Template.bind({});
ProfilePageEditableDark.args = {};

ProfilePageEditableDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { form: testFormData, readonly: false } }),
];
