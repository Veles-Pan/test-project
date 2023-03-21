import { ArticlePageCommentsSchema } from './ArticlePageCommentsSchema';
import { ArticlePageRecommendationsSchema } from './articlePageRecommendationsSchema';

export interface ArticlePageSchema {
    articlePageComments: ArticlePageCommentsSchema;
    articlePageRecommendations: ArticlePageRecommendationsSchema;
}
