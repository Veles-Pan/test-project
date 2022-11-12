import { classNames } from 'shared';
import styles from './Text.module.scss';

export enum TextThemes {
    COMMON = 'common',
    ERROR = 'error',
    DESCRIPTION = 'description',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextThemes
}

export const Text = ({
  className, title, text, theme = TextThemes.COMMON,
}: TextProps) => (
  <div className={classNames(styles.container, {}, [className, styles[theme]])}>
    {title && <h1 className={styles.title}>{title}</h1>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
);
