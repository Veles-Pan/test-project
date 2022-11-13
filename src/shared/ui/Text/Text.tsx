import { classNames } from 'shared';
import styles from './Text.module.scss';

export enum TextThemes {
    COMMON = 'common',
    ERROR = 'error',
    DESCRIPTION = 'description',
    ADDITIONAL = 'additional',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextThemes
  isBold?: boolean
}

export const Text = ({
  className, title, text, theme = TextThemes.COMMON, isBold = false,
}: TextProps) => (
  <div className={classNames(styles.container, {}, [className, styles[theme]])}>
    {title && <h1 className={styles.title}>{title}</h1>}
    {text && <p className={classNames(styles.text, { [styles.bold]: isBold })}>{text}</p>}
  </div>
);
