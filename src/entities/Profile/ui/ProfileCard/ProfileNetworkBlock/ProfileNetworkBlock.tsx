import { useTranslation } from 'react-i18next';

import {
  Avatar,
  classNames, Text, TextThemes,
} from 'shared';
import { ContentLoader } from 'widgets/ContentLoader';
import { Profile } from '../../../model/types/ProfileSchema';
import { EditableAvatar } from './EditableAvatar/EditableAvatar';
import styles from './ProfileNetworkBlock.module.scss';

interface ProfileNetworkBlockProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  isReadonly?: boolean
  error?: string
  onChangeAvatar?: () => void
}

export const ProfileNetworkBlock = ({
  className,
  data,
  isLoading = false,
  isReadonly = true,
  error,
  onChangeAvatar,
}: ProfileNetworkBlockProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.loaderContainer, {}, [className])}>
        <ContentLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.errorContainer, {}, [className])}>
        <Text theme={TextThemes.ERROR} title={error} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.container, {}, [className])}>
      {isReadonly ? (
        <Avatar alt="avatar" src={data?.avatar} className={styles.avatar} />
      )
        : (
          <EditableAvatar onChangeAvatar={onChangeAvatar} src={data?.avatar} className={styles.avatar} />
        )}

      <Text title={`${data?.first_name} ${data?.last_name}`} />
      <Text text={data?.position} />
      <Text text={`${data?.country}, ${data?.city}`} />
    </div>
  );
};
