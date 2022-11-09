import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import CounterPage from './CounterPage';

export default {
  title: 'pages/CounterPage',
  component: CounterPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CounterPage>;

const Template: ComponentStory<typeof CounterPage> = () => <CounterPage />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({ counter: { value: 100 } })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ counter: { value: 100 } })];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ counter: { value: 100 } })];
