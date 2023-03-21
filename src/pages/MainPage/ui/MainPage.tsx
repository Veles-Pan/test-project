import { useTranslation } from 'react-i18next';
import { Page, Text } from 'shared';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <Page className={styles.container}>
      <Text text={t('main-welcome')} />
    </Page>
  );
};

export default MainPage;
