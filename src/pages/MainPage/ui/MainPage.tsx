import { useTranslation } from 'react-i18next';
import { Text } from 'shared';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div className="main">
      <Text text={t('main-welcome')} />
    </div>
  );
};

export default MainPage;
