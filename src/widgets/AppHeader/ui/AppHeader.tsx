import { useCallback, useState } from 'react';
import {
  Button, classNames, LogoImage, Modal,
} from 'shared';
import { NavBar } from 'widgets/NavBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './AppHeader.module.scss';

interface AppHeaderProps {
  className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div>
        <LogoImage />
      </div>
      <NavBar />
      <ThemeSwitcher />
      <Modal isOpen={isModalOpen} onClose={onToggleModal}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident,
          sunt in culpa qui
          officia deserunt mollit anim id est laborum

        </p>
      </Modal>
      <Button onClick={onToggleModal}>Log In</Button>
    </header>
  );
};
