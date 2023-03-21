import { InView } from 'react-intersection-observer';
import { classNames } from 'shared';
import styles from './Page.module.scss';

interface PageProps {
  className?: string
  children: React.ReactNode
  onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => (
  <InView onChange={(inView) => inView === true && onScrollEnd?.()}>
    {({ ref }) => (
      <section className={classNames(styles.page, {}, [className])}>
        {children}
        <div ref={ref} />
      </section>
    )}
  </InView>
);
