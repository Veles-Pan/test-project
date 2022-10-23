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

export const ProfilePageDefault = Template.bind({});
ProfilePageDefault.args = {};
ProfilePageDefault.decorators = [StoreDecorator({ counter: { value: 100 } })];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};

ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ counter: { value: 100 } })];
