import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Country } from 'entities/Country';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => <ProfileCard />;

export const ProfileCardDefault = Template.bind({});
ProfileCardDefault.args = {};
ProfileCardDefault.decorators = [StoreDecorator({
  profile: {
    profile: {
      first_name: 'John', last_name: 'Doe', age: 10, country: Country.USA,
    },
  },
})];

export const ProfileCardDark = Template.bind({});
ProfileCardDark.args = {};

ProfileCardDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    profile: {
      first_name: 'John', last_name: 'Doe', age: 10, country: Country.USA,
    },
  },
})];
