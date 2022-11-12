import { Article } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextThemes } from 'shared';

const ArticlesPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title="Invalid URL" theme={TextThemes.ERROR} />;
  }

  return (
    <div className="main">
      <Article id={id} />
    </div>
  );
};

export default ArticlesPage;
