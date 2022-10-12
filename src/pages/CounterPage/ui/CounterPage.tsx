import { Counter } from 'entities/ui/Counter/Counter';
import { useTranslation } from 'react-i18next';

const CounterPage = () => {
  const { t } = useTranslation('counter');
  return (
    <div className="container">
      <p>{t('counter-welcome')}</p>
      <Counter />
    </div>
  );
};

export default CounterPage;
