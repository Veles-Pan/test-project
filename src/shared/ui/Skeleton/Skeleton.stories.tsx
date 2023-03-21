import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '700px',
  height: '200px',
  borderRadius: '20px',
};

export const Dark = Template.bind({});
Dark.args = {
  width: '700px',
  height: '200px',
  borderRadius: '20px',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  width: '700px',
  height: '200px',
  borderRadius: '20px',
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const DefaultCircle = Template.bind({});
DefaultCircle.args = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
};
