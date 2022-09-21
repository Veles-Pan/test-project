import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared';
import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink: React.FC<AppLinkProps> = ({
  className,
  to,
  children,
  ...rest
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames(styles.link, {}, [className])}
    {...rest}
  >
    {children}
  </Link>
);
