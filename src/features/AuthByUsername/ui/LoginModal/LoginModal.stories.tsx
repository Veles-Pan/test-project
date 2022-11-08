import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Common = Template.bind({});
Common.args = {
  isOpen: true,
};
Common.decorators = [StoreDecorator({ login: {} })];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ login: {} })];

export const Blue = Template.bind({});
Blue.args = {
  isOpen: true,
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ login: {} })];

export const CommonWithData = Template.bind({});
CommonWithData.args = {
  isOpen: true,
};
CommonWithData.decorators = [StoreDecorator({ login: { username: 'TestName', password: '12345' } })];

export const CommonWithError = Template.bind({});
CommonWithError.args = {
  isOpen: true,
};
CommonWithError.decorators = [
  StoreDecorator({ login: { username: 'TestName', password: '12345', error: 'Test Error' } }),
];

export const CommonWithErrorDark = Template.bind({});
CommonWithErrorDark.args = {
  isOpen: true,
};
CommonWithErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: 'TestName', password: '12345', error: 'Test Error' } }),
];

export const CommonWithErrorBlue = Template.bind({});
CommonWithErrorBlue.args = {
  isOpen: true,
};
CommonWithErrorBlue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ login: { username: 'TestName', password: '12345', error: 'Test Error' } }),
];

export const CommonWithLoader = Template.bind({});
CommonWithLoader.args = {
  isOpen: true,
};
CommonWithLoader.decorators = [
  StoreDecorator({ login: { username: 'TestName', password: '12345', isLoading: true } }),
];
