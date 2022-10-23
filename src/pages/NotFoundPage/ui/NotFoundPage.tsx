import { useTranslation } from 'react-i18next';
import { Text } from 'shared';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Text title={t('not-found')} />
    </div>
  );
};
