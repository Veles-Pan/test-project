import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { IArticle } from 'entities/Article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticleDetails } from './ArticleDetails';

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const data = {
  id: '1',
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Urna porttitor rhoncus dolor purusLorem ipsum dolor sitametfgghfhhfLorem ipsum dolor sit ametfgghfhhf',
  cover: 'https://i.imgur.com/5IM2wPD.png',
  authorId: '1',
  views: 1022,
  author: {
    username: 'admin',
    avatar: 'https://i.imgur.com/g6AWyos.jpg',
    id: '1',
  },
  createdAt: '2022-11-24T11:31:07.896Z',
  type: [
    'LOREM',
    'IPSUM',
    'LOREM',
    'LOREM',
    'LOREM',
    'IPSUM',
    'LOREM',
    'LOREM',
    'LOREM',
    'IPSUM',
    'LOREM',
    'LOREM',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'First Block Title',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit. Id donec ultrices tincidunt arcu non sodales neque sodales.',
        'Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Massa ultricies mi quis hendrerit dolor magna eget. Nec feugiat nisl pretium fusce id. Pellentesque id nibh tortor id aliquet. Mi tempus imperdiet nulla malesuada pellentesque elit. Vitae ultricies leo integer malesuada nunc vel risus. Libero volutpat sed cras ornare arcu dui vivamus. Tincidunt vitae semper quis lectus nulla at.',
        'Risus sed vulputate odio ut enim blandit volutpat. Pellentesque sit amet porttitor eget. Ac tincidunt vitae semper quis lectus nulla. Interdum varius sit amet mattis. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.',
      ],
    },
    {
      id: '2',
      type: 'TEXT',
      title: '',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque. Lectus proin nibh nisl condimentum id venenatis. Nibh nisl condimentum id venenatis a condimentum vitae. Risus sed vulputate odio ut enim blandit. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Vel pretium lectus quam id. Fringilla est ullamcorper eget nulla facilisi etiam. Facilisis leo vel fringilla est ullamcorper eget. Mollis nunc sed id semper risus in hendrerit gravida. Eget sit amet tellus cras adipiscing enim eu turpis. Nibh mauris cursus mattis molestie.',
        'Non diam phasellus vestibulum lorem sed risus ultricies. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Pulvinar mattis nunc sed blandit libero. Tellus rutrum tellus pellentesque eu tincidunt. Ultricies lacus sed turpis tincidunt id aliquet.',
      ],
    },
    {
      id: '3',
      type: 'IMAGE',
      src: 'https://i.imgur.com/5nXhs2L.png',
      title: ' Diam quis enim lobortis scelerisque fermentum dui.',
    },
  ],
} as IArticle;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
};

export const Dark = Template.bind({});
Dark.args = {
  data,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  data,
};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
