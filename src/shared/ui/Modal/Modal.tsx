import {
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
  lazy?: boolean
}

const CLOSE_ANIMATION_DELAY = 200;

export const Modal = ({
  className, children, isOpen = false, onClose, lazy = false,
}: ModalProps) => {
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isModalOpen,
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
      timeRef.current = setTimeout(() => {
        setIsModalOpen(true);
      }, 0);
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      setIsModalOpen(false);
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

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
