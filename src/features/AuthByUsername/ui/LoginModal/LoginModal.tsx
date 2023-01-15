import { Suspense } from 'react';
import { Modal } from 'shared';
import { ContentLoader } from 'widgets/ContentLoader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal lazy isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<ContentLoader />}><LoginForm onSuccessfulLogin={onClose} /></Suspense>
  </Modal>
);
