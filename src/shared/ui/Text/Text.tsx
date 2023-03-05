import { classNames } from 'shared';
import styles from './Text.module.scss';

export enum TextThemes {
  COMMON = 'common',
  ERROR = 'error',
  DESCRIPTION = 'description',
  ADDITIONAL = 'additional',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
  isBold?: boolean;
  align?: TextAlign;
}

export const Text = ({
  className,
  title,
  text,
  theme = TextThemes.COMMON,
  isBold = false,
  align = TextAlign.LEFT,
}: TextProps) => (
  <div className={classNames(styles.container, {}, [className, styles[theme]])}>
    {title && (
      <h1 className={classNames(styles.title, {}, [styles[align]])}>{title}</h1>
    )}
    {text && (
      <p
        className={classNames(styles.text, { [styles.bold]: isBold }, [
          styles[align],
        ])}
      >
        {text}
      </p>
    )}
  </div>
);
