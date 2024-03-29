import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { IArticle, TypesOfArticlesView } from 'entities/Article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const article = {
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
    {
      id: '4',
      type: 'TEXT',
      title: 'Third title',
      paragraphs: [
        'Faucibus in ornare quam viverra orci sagittis eu volutpat. Lobortis elementum nibh tellus molestie. Auctor urna nunc id cursus metus aliquam eleifend. Laoreet sit amet cursus sit amet dictum. Facilisis sed odio morbi quis. Duis tristique sollicitudin nibh sit amet commodo nulla. In tellus integer feugiat scelerisque varius morbi. In hendrerit gravida rutrum quisque non tellus orci. Sed velit dignissim sodales ut eu sem integer vitae. Hac habitasse platea dictumst vestibulum rhoncus.',
        'Posuere sollicitudin aliquam ultrices sagittis. Integer enim neque volutpat ac tincidunt vitae. Odio ut enim blandit volutpat maecenas volutpat blandit. Vulputate sapien nec sagittis aliquam. Lacus sed viverra tellus in. Molestie nunc non blandit massa enim nec dui nunc mattis. Dapibus ultrices in iaculis nunc. Ut porttitor leo a diam sollicitudin tempor id eu. Ut tortor pretium viverra suspendisse. Consectetur a erat nam at lectus urna. Et molestie ac feugiat sed lectus.',
      ],
    },
    {
      id: '5',
      type: 'IMAGE',
      src: 'https://i.imgur.com/5nXhs2L.png',
      title: 'Nibh praesent tristique magna sit amet purus gravida.',
    },
    {
      id: '6',
      type: 'TEXT',
      paragraphs: [
        'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vel risus commodo viverra maecenas. Diam maecenas sed enim ut sem. Facilisis volutpat est velit egestas dui. Interdum varius sit amet mattis vulputate enim nulla. Mauris vitae ultricies leo integer malesuada nunc. Cras pulvinar mattis nunc sed blandit. Scelerisque fermentum dui faucibus in ornare quam. Quis hendrerit dolor magna eget. Dui vivamus arcu felis bibendum ut. At imperdiet dui accumsan sit amet nulla. Arcu risus quis varius quam quisque. Cursus in hac habitasse platea dictumst quisque sagittis. Sapien et ligula ullamcorper malesuada proin. Laoreet id donec ultrices tincidunt arcu non sodales. Vitae semper quis lectus nulla at volutpat diam ut.',
      ],
    },
  ],
} as IArticle;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const DefaultTile = Template.bind({});
DefaultTile.args = {
  article,
  typeOfView: TypesOfArticlesView.TILE,
};

export const DarkTile = Template.bind({});
DarkTile.args = {
  article,
  typeOfView: TypesOfArticlesView.TILE,
};

DarkTile.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueTile = Template.bind({});
BlueTile.args = {
  article,
  typeOfView: TypesOfArticlesView.TILE,
};

BlueTile.decorators = [ThemeDecorator(Theme.BLUE)];

export const DefaultList = Template.bind({});
DefaultList.args = {
  article,
  typeOfView: TypesOfArticlesView.LIST,
};

export const DarkList = Template.bind({});
DarkList.args = {
  article,
  typeOfView: TypesOfArticlesView.LIST,
};

DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueList = Template.bind({});
BlueList.args = {
  article,
  typeOfView: TypesOfArticlesView.LIST,
};

BlueList.decorators = [ThemeDecorator(Theme.BLUE)];
