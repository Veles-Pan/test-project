import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
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

export const CounterPageDefault = Template.bind({});
CounterPageDefault.args = {};

export const CounterPageDark = Template.bind({});
CounterPageDark.args = {};

CounterPageDark.decorators = [ThemeDecorator(Theme.DARK)];
