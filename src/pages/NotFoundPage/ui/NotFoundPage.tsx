import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t('not-found')}</h1>
    </div>
  );
};
