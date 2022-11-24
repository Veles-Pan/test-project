import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  DynamicReducersLoader, ReducersList, useAppDispatch,
} from 'shared';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }
  }, [dispatch, id]);

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
