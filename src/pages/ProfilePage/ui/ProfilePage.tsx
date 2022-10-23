import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicReducersLoader, ReducersList, Text } from 'shared';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  return (
    <DynamicReducersLoader reducers={reducers}>
      <div className="container">
        <Text text={t('profile-welcome')} />
      </div>

    </DynamicReducersLoader>
  );
};

export default ProfilePage;
