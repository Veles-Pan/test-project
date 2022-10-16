import { getUserData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, classNames, LogoImage,
} from 'shared';
import { NavBar } from 'widgets/NavBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './AppHeader.module.scss';

interface AppHeaderProps {
  className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector(getUserData);

  const { t } = useTranslation();

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div>
        <LogoImage />
      </div>
      <NavBar />
      <ThemeSwitcher />
      {authData ? (<Button onClick={onLogout}>{t('header.logout')}</Button>) : (
        <>
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <Button onClick={openModal}>{t('header.login')}</Button>
        </>
      )}

    </header>
  );
};
