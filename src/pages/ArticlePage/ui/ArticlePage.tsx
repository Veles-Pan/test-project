import { Article } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { useParams } from 'react-router-dom';
import { Text, TextThemes } from 'shared';

const ArticlesPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title="Invalid URL" theme={TextThemes.ERROR} />;
  }

  return (
    <>
      <Article id={id} />
      <Comment />
    </>
  );
};

export default ArticlesPage;
