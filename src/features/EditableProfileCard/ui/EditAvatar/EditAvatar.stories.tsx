import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import EditAvatar from './EditAvatar';

export default {
  title: 'features/EditAvatar',
  component: EditAvatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditAvatar>;

const Template: ComponentStory<typeof EditAvatar> = (args) => <EditAvatar {...args} />;

export const Common = Template.bind({});
Common.args = {
};
Common.decorators = [StoreDecorator({ profile: { form: { avatar: 'https://avatar.png' } } })];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { form: { avatar: 'https://avatar.png' } } })];

export const Blue = Template.bind({});
Blue.args = {
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({ profile: { form: { avatar: 'https://avatar.png' } } })];

export const Empty = Template.bind({});
Empty.args = {
};
Empty.decorators = [StoreDecorator({ profile: { form: {} } })];
