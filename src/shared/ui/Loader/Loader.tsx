import { classNames } from 'shared';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(styles.loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
