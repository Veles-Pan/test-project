import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ProfilePageHeader } from './ProfilePageHeader';

export default {
  title: 'pages/ProfilePageHeader',
  component: ProfilePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = () => <ProfilePageHeader />;

export const ProfilePageHeaderDefault = Template.bind({});
ProfilePageHeaderDefault.args = {};
ProfilePageHeaderDefault.decorators = [
  StoreDecorator({ profile: { readonly: true } }),
];

export const ProfilePageHeaderDark = Template.bind({});
ProfilePageHeaderDark.args = {};

ProfilePageHeaderDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { readonly: true } }),
];

export const ProfilePageHeaderEditableDefault = Template.bind({});
ProfilePageHeaderEditableDefault.args = {};
ProfilePageHeaderEditableDefault.decorators = [
  StoreDecorator({ profile: { readonly: false } }),
];

export const ProfilePageHeaderEditableDark = Template.bind({});
ProfilePageHeaderEditableDark.args = {};

ProfilePageHeaderEditableDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { readonly: false } }),
];
