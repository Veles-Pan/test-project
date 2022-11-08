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

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({ profile: { readonly: true } }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { readonly: true } }),
];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ profile: { readonly: true } }),
];

export const EditableDefault = Template.bind({});
EditableDefault.args = {};
EditableDefault.decorators = [
  StoreDecorator({ profile: { readonly: false } }),
];

export const EditableDark = Template.bind({});
EditableDark.args = {};

EditableDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ profile: { readonly: false } }),
];

export const EditableBlue = Template.bind({});
EditableBlue.args = {};

EditableBlue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ profile: { readonly: false } }),
];
