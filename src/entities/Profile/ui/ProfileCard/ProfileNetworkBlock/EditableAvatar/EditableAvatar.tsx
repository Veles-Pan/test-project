import { EditAvatarModal } from 'features/EditableProfileCard/ui/EditAvatarModile/EditAvatarModal';
import { useCallback, useState } from 'react';
import { EditIcon, Avatar, classNames } from 'shared';
import styles from './EditableAvatar.module.scss';

interface EditableAvatarProps {
  className?: string
  src?: string
  onChangeAvatar?: () => void
}

export const EditableAvatar = ({ className, src, onChangeAvatar }: EditableAvatarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className={classNames(styles.editContainer, {}, [])}>
      <div onClick={openModal} className={styles.editArea}>
        <EditIcon className={styles.editIcon} />
      </div>
      <Avatar alt="avatar" src={src} className={className} />
      {isModalOpen && <EditAvatarModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};
