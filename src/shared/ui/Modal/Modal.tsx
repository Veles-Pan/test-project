import React, {
  useEffect, ReactNode, MouseEvent, useState, useRef, useCallback,
} from 'react';
import { classNames } from 'shared';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const CLOSE_ANIMATION_DELAY = 200;

export const Modal = ({
  className, children, isOpen = false, onClose,
}: ModalProps) => {
  const [isModalClosing, setIsModalClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isModalClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsModalClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsModalClosing(false);
      }, CLOSE_ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    const a = 0;
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className])}>
        <div onClick={closeHandler} className={styles.modalOverlay}>
          <div onClick={onContentClick} className={styles.modalContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
