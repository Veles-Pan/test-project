import { classNames, LogoImage } from 'shared';
import { NavBar } from 'widgets/NavBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './AppHeader.module.scss';

interface AppHeaderProps {
  className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => (
  <header className={classNames(styles.header, {}, [className])}>
    <div>
      <LogoImage />
    </div>
    <NavBar />
    <ThemeSwitcher />
  </header>
);
