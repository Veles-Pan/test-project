import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button, ButtonThemes, classNames, useAppDispatch,
} from 'shared';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';
import styles from './Counter.module.scss';

export const Counter = () => {
  const { t } = useTranslation('counter');
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter" className={classNames(styles.counter, {}, [])}>
      <h2 data-testid="counter-value">{counterValue}</h2>
      <Button data-testid="counter-plus-button" onClick={handleIncrement} theme={ButtonThemes.COMMON}>
        {t('counter-plus-button')}
      </Button>
      <Button data-testid="counter-minus-button" onClick={handleDecrement} theme={ButtonThemes.COMMON}>
        {t('counter-minus-button')}
      </Button>
    </div>
  );
};
