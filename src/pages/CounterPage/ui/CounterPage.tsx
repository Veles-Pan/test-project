import { Counter } from 'entities';
import { useTranslation } from 'react-i18next';

const CounterPage = () => {
  const { t } = useTranslation('counter');

  return (
    <div className="counter">
      <p>{t('counter-welcome')}</p>
      {' '}
      <Counter />
    </div>
  );
};

export default CounterPage;
