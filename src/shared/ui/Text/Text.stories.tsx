import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Text, TextThemes } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Common = Template.bind({});
Common.args = {
  title: 'Title',
  text: 'Text',
};

export const CommonDark = Template.bind({});
CommonDark.args = {
  title: 'Title',
  text: 'Text',
};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text',
};

export const CommonError = Template.bind({});
CommonError.args = {
  title: 'Title',
  text: 'Text',
  theme: TextThemes.ERROR,
};

export const CommonDarkError = Template.bind({});
CommonDarkError.args = {
  title: 'Title',
  text: 'Text',
  theme: TextThemes.ERROR,
};
CommonDarkError.decorators = [ThemeDecorator(Theme.DARK)];
