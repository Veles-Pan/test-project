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

export const CommonDark = Template.bind({});
CommonDark.args = {
  value: Country.Portugal,
  onChange: () => {},
};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
  value: Country.Portugal,
  onChange: () => {},
  isReadonly: true,
};
