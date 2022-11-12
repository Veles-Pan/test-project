import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { useEffect } from 'react';
import {
  DynamicReducersLoader, LOCAL_STORAGE_AUTH, ReducersList, useAppDispatch,
} from 'shared';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      const userId = localStorage.getItem(LOCAL_STORAGE_AUTH);
      dispatch(fetchProfileData(userId || ''));
    }
  }, [dispatch]);

  return (
    <DynamicReducersLoader reducers={reducers}>
      <div>
        <ProfilePageHeader />
        <EditableProfileCard />
      </div>

    </DynamicReducersLoader>
  );
};

export default ProfilePage;
