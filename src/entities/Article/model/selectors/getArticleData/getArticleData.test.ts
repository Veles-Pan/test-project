import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleTypes, BlockTypes, IArticle } from '../../types/article';
import { getArticleData } from './getArticleData';

describe('getArticleData', () => {
  test('should return article data', () => {
    const data: IArticle = {
      id: '1',
      title: 'Article title',
      subtitle: 'Article subtitle',
      createdAt: '2021-01-01',
      views: 100,
      cover: 'https://picsum.photos/200/300',
      type: [ArticleTypes.LOREM],
      authorId: '1',
      author: {
        first_name: 'John',
        last_name: 'Doe',
      },
      blocks: [
        {
          id: '1',
          type: BlockTypes.TEXT,
          paragraphs: ['Paragraph 1', 'Paragraph 2'],
        },
      ],
    };

    const state: DeepPartial<StateSchema> = {
      article: {
        data,
      },
    };
    expect(getArticleData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleData(state as StateSchema)).toEqual(undefined);
  });
});
