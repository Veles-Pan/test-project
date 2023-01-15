import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Country } from '../../model/types/country';

import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Common = Template.bind({});
Common.args = {
  value: Country.Portugal,
  onChange: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  value: Country.Portugal,
  onChange: () => {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  value: Country.Portugal,
  onChange: () => {},
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Readonly = Template.bind({});
Readonly.args = {
  value: Country.Portugal,
  onChange: () => {},
  isReadonly: true,
};
