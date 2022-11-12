import { useTranslation } from 'react-i18next';
import { Text } from 'shared';

const ArticlesPage = () => {
  const { t } = useTranslation('article');
  return (
    <div className="main">
      <Text text={t('article-welcome')} />
    </div>
  );
};

export default ArticlesPage;
