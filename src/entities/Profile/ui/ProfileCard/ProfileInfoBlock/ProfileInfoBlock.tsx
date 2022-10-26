import { useTranslation } from 'react-i18next';

import {
  classNames, Input, Text,
} from 'shared';
import { Profile } from '../../../model/types/ProfileSchema';
import styles from './ProfileInfoBlock.module.scss';

interface ProfileInfoBlockProps {
  className?: string
  data?: Profile
  isReadonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: number) => void
  onChangeEmail?: (value: string) => void
  onChangePosition?: (value: string) => void
  onChangeCity?: (value: string) => void
}

export const ProfileInfoBlock = ({
  className,
  data,
  isReadonly = false,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeEmail,
  onChangePosition,
  onChangeCity,
}: ProfileInfoBlockProps) => {
  const { t } = useTranslation('profile');

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Text text={`${t('profile-card.first-name')}:`} />
      <Input onChange={onChangeFirstname} isReadonly={isReadonly} className={styles.input} value={data?.first_name} />

      <Text text={`${t('profile-card.last-name')}:`} />
      <Input onChange={onChangeLastname} isReadonly={isReadonly} className={styles.input} value={data?.last_name} />

      <Text text="Email: " />
      <Input onChange={onChangeEmail} isReadonly={isReadonly} className={styles.input} value={data?.email} />

      <Text text={`${t('profile-card.position')}:`} />
      <Input onChange={onChangePosition} isReadonly={isReadonly} className={styles.input} value={data?.position} />

      <Text text={`${t('profile-card.age')}:`} />
      <Input onChange={onChangeAge} isReadonly={isReadonly} className={styles.input} value={data?.age} />

      <Text text={`${t('profile-card.country')}:`} />
      <Input isReadonly={isReadonly} className={styles.input} value={data?.country} />

      <Text text={`${t('profile-card.city')}:`} />
      <Input onChange={onChangeCity} isReadonly={isReadonly} className={styles.input} value={data?.city} />
    </div>
  );
};
