import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Common = Template.bind({});
Common.args = {};
Common.decorators = [StoreDecorator({ login: {} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ login: {} })];

export const CommonWithData = Template.bind({});
CommonWithData.args = {};
CommonWithData.decorators = [StoreDecorator({ login: { username: 'TestName', password: '12345' } })];

export const CommonWithError = Template.bind({});
CommonWithError.args = {};
CommonWithError.decorators = [
  StoreDecorator({ login: { username: 'TestName', password: '12345', error: 'Error message' } }),
];

export const CommonWithErrorDark = Template.bind({});
CommonWithErrorDark.args = {};
CommonWithErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: 'TestName', password: '12345', error: 'Error message' } }),
];

export const CommonWithLoading = Template.bind({});
CommonWithLoading.args = {};
CommonWithLoading.decorators = [
  StoreDecorator({ login: { username: 'TestName', password: '12345', isLoading: true } }),
];

export const CommonWithLoadingDark = Template.bind({});
CommonWithLoadingDark.args = {};
CommonWithLoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: 'TestName', password: '12345', isLoading: true } }),
];
