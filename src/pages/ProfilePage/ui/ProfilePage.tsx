import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicReducersLoader, ReducersList, Text, useAppDispatch,
} from 'shared';

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
        <Text text={t('profile-welcome')} />
        <ProfileCard />
      </div>

    </DynamicReducersLoader>
  );
};

export default ProfilePage;
