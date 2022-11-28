import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, classNames } from 'shared';
import { getBurgerMenuItems } from 'widgets/AppHeader/model/selectors/getBurgerMenuItems';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { BurgerMenuItem } from '../BurgerMenuItem/BurgerMenuItem';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  className?: string
  authData?: string
  onLogout: () => void

}

export const BurgerMenu = ({ className, authData, onLogout }: BurgerMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const burgerMenuItems = useSelector(getBurgerMenuItems);
  const { t } = useTranslation();

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={classNames(styles.burger)} onClick={() => setIsMenuOpen((prev) => !prev)}>
        <div
          className={classNames(styles.toggle, { [styles.toggleOpened]: isMenuOpen })}
        />
        <div className={classNames(styles.middleLine, { [styles.middleLineHidden]: isMenuOpen })} />
      </div>

      <ul className={classNames(styles.menu, { [styles.menuOpened]: isMenuOpen })}>

        <li className={styles.links}>
          {burgerMenuItems.map((item) => (
            <BurgerMenuItem key={item.path} {...item} />
          ))}

        </li>

        <li className={styles.buttons}>
          {authData ? (<Button onClick={onLogout}>{t('header.logout')}</Button>) : (
            <>
              {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={closeModal} />}
              <Button onClick={openModal}>{t('header.login')}</Button>
            </>
          )}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </li>

      </ul>
    </div>
  );
};
