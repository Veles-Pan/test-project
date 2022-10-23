import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Counter } from './Counter';

export default {
  title: 'entities/Counter',
  component: Counter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const CounterDefault = Template.bind({});
CounterDefault.args = {};
CounterDefault.decorators = [StoreDecorator({ counter: { value: 100 } })];

export const CounterDark = Template.bind({});
CounterDark.args = {};

CounterDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ counter: { value: 100 } })];
