import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button, classNames, Input, useAppDispatch,
} from 'shared';
import { getProfileFormData, updateProfileData } from 'features/EditableProfileCard';
import { profileActions } from '../../model/slice/profileSlice';
import styles from './EditAvatar.module.scss';

export interface EditAvatarProps {
  className?: string
  onClose: () => void
}

const EditAvatar = memo(({ className, onClose }: EditAvatarProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileFormData);

  const onChangeAvatarHandler = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onSaveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(profileActions.cancelEdittingAvatar());
    onClose();
  }, [dispatch, onClose]);

  return (

    <form className={classNames(styles.form, {}, [className])}>
      <Input value={formData?.avatar} onChange={onChangeAvatarHandler} placeholder="https://avatar-example.com" />
      <Button onClick={onSaveHandler}>{t('profile-save-button')}</Button>
      <Button onClick={onCancelHandler}>{t('profile-cansel-button')}</Button>
    </form>

  );
});

export default EditAvatar;
