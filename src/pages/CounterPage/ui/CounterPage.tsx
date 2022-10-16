import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared';

const CounterPage = () => {
  const { t } = useTranslation('counter');
  return (
    <div className="container">
      <Text text={t('counter-welcome')} />
      <Counter />
    </div>
  );
};

export default CounterPage;
