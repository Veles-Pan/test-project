import { Suspense } from 'react';
import { Modal } from 'shared';
import { ContentLoader } from 'widgets/ContentLoader';
import { EditAvatarAsync as Editavatar } from '../Editavatar/Editavatar.async';

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const EditAvatarModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal lazy isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<ContentLoader />}><Editavatar onClose={onClose} /></Suspense>
  </Modal>
);
