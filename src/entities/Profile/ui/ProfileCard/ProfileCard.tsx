import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, classNames, Text } from 'shared';
import React from 'react';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={styles.info}>
        <Text title={t('profile-title')} />
        <Button>{t('profile-edit-button')}</Button>
      </div>

      <div className={styles.card}>
        <Text text={`${t('profile-card.first-name')}:`} />
        <Text text={data?.first_name} />

        <Text text={`${t('profile-card.last-name')}:`} />
        <Text text={data?.last_name} />

        <Text text={`${t('profile-card.age')}:`} />
        <Text text={data?.age.toString()} />

        <Text text={`${t('profile-card.country')}:`} />
        <Text text={data?.country} />
      </div>
    </div>
  );
};
