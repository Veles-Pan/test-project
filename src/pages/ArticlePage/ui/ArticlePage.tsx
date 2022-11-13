import { Article } from 'entities/Article';
import { Comments } from 'entities/Comment';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicReducersLoader, ReducersList, Text, TextThemes, useAppDispatch,
} from 'shared';
import {
  getArticlePageCommentsError,
} from '../model/selectors/getArticlePageCommentsError/getArticlePageCommentsError';
import {
  getArticlePageCommentsLoading,
} from '../model/selectors/getArticlePageCommentsLoading/getArticlePageCommentsLoading';
import { fetchCommentsData } from '../model/services/fetchCommentsData/fetchCommentsData';
import { articlePageCommentsReducer, getArticleComments } from '../model/slice/ArticlePageCommentsSlice';

const reducers: ReducersList = {
  articlePageComments: articlePageCommentsReducer,
};

const ArticlesPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticlePageCommentsLoading);
  const commentsError = useSelector(getArticlePageCommentsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsData(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return <Text title="Invalid URL" theme={TextThemes.ERROR} />;
  }

  return (
    <DynamicReducersLoader reducers={reducers}>
      <Article id={id} />
      <Comments comments={comments} isLoading={isCommentsLoading} error={commentsError} />
    </DynamicReducersLoader>
  );
};

export default ArticlesPage;
