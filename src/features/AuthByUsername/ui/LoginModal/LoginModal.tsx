import { Modal } from 'shared';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal lazy isOpen={isOpen} onClose={onClose}>
    <LoginForm />
  </Modal>
);
