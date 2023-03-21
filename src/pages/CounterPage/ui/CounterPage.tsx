import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page, Text } from 'shared';
import styles from './CounterPage.module.scss';

const CounterPage = () => {
  const { t } = useTranslation('counter');
  return (
    <Page className={styles.container}>
      <Text text={t('counter-welcome')} />
      <Counter />
    </Page>
  );
};

export default CounterPage;
