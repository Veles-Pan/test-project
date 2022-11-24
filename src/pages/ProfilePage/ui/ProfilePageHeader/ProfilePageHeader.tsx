import { getUserAuthData } from 'entities/User';
import { getProfileReadonly, profileActions, updateProfileData } from 'features/EditableProfileCard';
import { getProfileData } from 'features/EditableProfileCard/model/selectors/getProfileData/getProfileData';
import { useCallback } from 'react';
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
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = profileData?.id === authData;

  const onEditHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSaveHandler = useCallback(() => {
    dispatch(updateProfileData(authData || ''));
  }, [authData, dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(profileActions.cancelEdittingProfile());
  }, [dispatch]);

  if (!canEdit) {
    return (
      <div className={styles.header}>
        <Text title={t('profile-title')} />
      </div>
    );
  }

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
