import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { EditAvatarModal } from './EditAvatarModal';

export default {
  title: 'features/EditAvatarModal',
  component: EditAvatarModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditAvatarModal>;

const Template: ComponentStory<typeof EditAvatarModal> = (args) => <EditAvatarModal {...args} />;

export const Common = Template.bind({});
Common.args = {
  isOpen: true,
};
Common.decorators = [StoreDecorator({ profile: { form: { avatar: 'https://avatar.png' } } })];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { form: { avatar: 'https://avatar.png' } } })];

export const Empty = Template.bind({});
Empty.args = {
  isOpen: true,
};
Empty.decorators = [StoreDecorator({ profile: { form: {} } })];
