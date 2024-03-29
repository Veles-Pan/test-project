import { Article, ArticleList, TypesOfArticlesView } from 'entities/Article';
import { Comments } from 'entities/Comment';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicReducersLoader, Page, ReducersList, Text, TextThemes, useAppDispatch,
} from 'shared';
import {
  getArticlePageCommentsError,
} from '../model/selectors/getArticlePageCommentsError/getArticlePageCommentsError';
import {
  getArticlePageCommentsLoading,
} from '../model/selectors/getArticlePageCommentsLoading/getArticlePageCommentsLoading';
import {
  getArticleRecommendationsError,
  getArticleRecommendationsLoading,
} from '../model/selectors/getArticleRecommendations/getArticleRecommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsData } from '../model/services/fetchCommentsData/fetchCommentsData';
import { fetchRecommendations } from '../model/services/fetchRecommendations/fetchRecommendations';
import { articlePageReducer } from '../model/slice';
import { getArticleComments } from '../model/slice/ArticlePageCommentsSlice';
import {

  getArticleRecommendations,
} from '../model/slice/ArticlePageRecommendationsSlice';

const reducers: ReducersList = {
  articlePage: articlePageReducer,
};

const ArticlesPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isCommentsLoading = useSelector(getArticlePageCommentsLoading);
  const commentsError = useSelector(getArticlePageCommentsError);
  const isRecommendationsLoading = useSelector(getArticleRecommendationsLoading);
  const recommendationsError = useSelector(getArticleRecommendationsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsData(id));
      dispatch(fetchRecommendations());
    }
  }, [dispatch, id]);

  const onSendCommentHandler = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
    dispatch(fetchCommentsData(id));
  }, [dispatch, id]);

  if (!id) {
    return <Text title="Invalid URL" theme={TextThemes.ERROR} />;
  }

  return (
    <DynamicReducersLoader reducers={reducers}>
      <Page>
        <Article id={id} />

        <Text title="Recommend" />

        <ArticleList
          typeOfView={TypesOfArticlesView.TILE}
          error={recommendationsError}
          articles={recommendations}
          isLoading={isRecommendationsLoading}
        />

        <Comments
          onSendComment={onSendCommentHandler}
          comments={comments}
          isLoading={isCommentsLoading}
          error={commentsError}
        />
      </Page>

    </DynamicReducersLoader>
  );
};

export default ArticlesPage;
