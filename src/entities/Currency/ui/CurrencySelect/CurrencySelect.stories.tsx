import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Currency } from 'entities/Currency/model/types/currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Common = Template.bind({});
Common.args = {
  value: Currency.EUR,
  onChange: () => {},
};

export const CommonDark = Template.bind({});
CommonDark.args = {
  value: Currency.EUR,
  onChange: () => {},
};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
  value: Currency.EUR,
  onChange: () => {},
  isReadonly: true,
};
