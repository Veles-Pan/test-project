import { useTranslation } from 'react-i18next';
import { Text } from 'shared';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  return (
    <div className="main">
      <Text text={t('articles-welcome')} />
    </div>
  );
};

export default ArticlesPage;
