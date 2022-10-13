import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  children: 'Text',
  isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Text',
  isOpen: true,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
