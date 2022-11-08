import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { useEffect } from 'react';
import {
  DynamicReducersLoader, ReducersList, useAppDispatch,
} from 'shared';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
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
