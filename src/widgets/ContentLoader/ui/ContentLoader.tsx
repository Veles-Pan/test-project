import { classNames } from 'shared';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './ContentLoader.module.scss';

interface ContentLoaderProps {
  className?: string
}

export const ContentLoader = ({ className }: ContentLoaderProps) => (
  <div className={classNames(styles.container, {}, [className])}>
    <Loader />
  </div>
);
