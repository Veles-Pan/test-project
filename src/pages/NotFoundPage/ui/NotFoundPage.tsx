import { useTranslation } from 'react-i18next';
import { Page, Text } from 'shared';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={styles.container}>
      <Text title={t('not-found')} />
    </Page>
  );
};
