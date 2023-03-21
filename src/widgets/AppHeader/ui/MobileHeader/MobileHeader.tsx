import { getUserAuthData, userActions } from 'entities/User';
import {
  memo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import {
  classNames, LogoImage, useAppDispatch,
} from 'shared';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import styles from './MobileHeader.module.scss';

interface MobileHeaderProps {
  className?: string
}

export const MobileHeader = memo(({ className }: MobileHeaderProps) => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div>
        <LogoImage />
      </div>
      <BurgerMenu onLogout={onLogout} authData={authData} />

    </header>
  );
});
