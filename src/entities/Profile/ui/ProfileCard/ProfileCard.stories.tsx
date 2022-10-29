import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Country } from 'entities/Country';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardDefault = Template.bind({});
ProfileCardDefault.args = {
  isReadonly: true,
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

export const ProfileCardDark = Template.bind({});
ProfileCardDark.args = {
  isReadonly: true,
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

ProfileCardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardEditable = Template.bind({});
ProfileCardEditable.args = {
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

export const ProfileCardDarkEditable = Template.bind({});
ProfileCardDarkEditable.args = {
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

ProfileCardDarkEditable.decorators = [ThemeDecorator(Theme.DARK)];
