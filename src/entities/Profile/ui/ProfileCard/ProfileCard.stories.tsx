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

export const Default = Template.bind({});
Default.args = {
  isReadonly: true,
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  isReadonly: true,
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  isReadonly: true,
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Editable = Template.bind({});
Editable.args = {
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

export const DarkEditable = Template.bind({});
DarkEditable.args = {
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

DarkEditable.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueEditable = Template.bind({});
BlueEditable.args = {
  data: {
    first_name: 'John', country: Country.USA, age: 34,
  },
  formData: {
    first_name: 'John', country: Country.USA, age: 34,
  },
};

BlueEditable.decorators = [ThemeDecorator(Theme.BLUE)];
