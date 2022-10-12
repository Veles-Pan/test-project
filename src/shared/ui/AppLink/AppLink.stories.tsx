import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkDefault = Template.bind({});
AppLinkDefault.args = {
  children: 'Text',
};

export const AppLinkDark = Template.bind({});
AppLinkDark.args = {
  children: 'Text',
};
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
