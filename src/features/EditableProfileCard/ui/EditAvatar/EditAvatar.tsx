import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button, classNames, Input, LOCAL_STORAGE_AUTH, useAppDispatch,
} from 'shared';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import styles from './EditAvatar.module.scss';

export interface EditAvatarProps {
  className?: string
  onClose: () => void
}

const EditAvatar = memo(({ className, onClose }: EditAvatarProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem(LOCAL_STORAGE_AUTH);

  const formData = useSelector(getProfileFormData);

  const onChangeAvatarHandler = useCallback((value: string) => {
    dispatch(profileActions.updateForm({ avatar: value }));
  }, [dispatch]);

  const onSaveHandler = useCallback(() => {
    dispatch(updateProfileData(userId || ''));
  }, [dispatch, userId]);

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
