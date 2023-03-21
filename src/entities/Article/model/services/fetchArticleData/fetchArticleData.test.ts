import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleTypes, BlockTypes, IArticle } from '../../types/article';
import { fetchArticleData } from './fetchArticleData';

const data: IArticle = {
  id: '1',
  title: 'Article title',
  subtitle: 'Article subtitle',
  createdAt: '2021-01-01',
  views: 100,
  cover: 'https://picsum.photos/200/300',
  type: [ArticleTypes.LOREM],
  authorId: '67',
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

describe('fetchArticleData', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(data.id!);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(data.id!);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error with fetching article data');
  });
});
