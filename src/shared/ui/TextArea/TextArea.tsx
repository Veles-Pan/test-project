import {
  ChangeEvent,
  FC, memo, useEffect, useRef,
} from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  className?: string
  value?: string | number
  onChange?: (value: any) => void
  placeholder?: string
}

export const TextArea: FC<TextAreaProps> = memo(({
  className,
  value,
  onChange,
  placeholder,
  ...rest
}: TextAreaProps) => {
  const TextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
  };

  useEffect(() => {
    if (TextAreaRef && TextAreaRef.current) {
      TextAreaRef.current.style.height = '0px';
      const { scrollHeight } = TextAreaRef.current;
      TextAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={TextAreaRef}
      value={value}
      onChange={onChangeHandler}
      className={styles.container}
      placeholder={placeholder}
      {...rest}
    />
  );
});
