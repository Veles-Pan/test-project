import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button,
  DynamicReducersLoader, ReducersList, Text, useAppDispatch,
} from 'shared';
import styles from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducersLoader reducers={reducers}>
      <div className="container">
        <ProfilePageHeader />
        <EditableProfileCard />
      </div>

    </DynamicReducersLoader>
  );
};

export default ProfilePage;
