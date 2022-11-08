import { getProfileReadonly, profileActions, updateProfileData } from 'features/EditableProfileCard';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button,
  ButtonThemes,
  Text,
  useAppDispatch,
} from 'shared';
import styles from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const isReadonly = useSelector(getProfileReadonly);

  const onEditHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSaveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(profileActions.cancelEdittingProfile());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <Text title={t('profile-title')} />
      {isReadonly ? (
        <Button onClick={onEditHandler}>{t('profile-edit-button')}</Button>
      )
        : (
          <>
            <Button onClick={onSaveHandler}>{t('profile-save-button')}</Button>
            <Button theme={ButtonThemes.CANCEL} onClick={onCancelHandler}>{t('profile-cansel-button')}</Button>
          </>
        )}

    </div>

  );
};
