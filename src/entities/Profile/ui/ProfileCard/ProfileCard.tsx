import { useTranslation } from 'react-i18next';

import {
  classNames, Input, Text, TextThemes,
} from 'shared';
import { ContentLoader } from 'widgets/ContentLoader';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/ProfileSchema';
import { ProfileNetworkBlock } from './ProfileNetworkBlock/ProfileNetworkBlock';
import { ProfileInfoBlock } from './ProfileInfoBlock/ProfileInfoBlock';

interface ProfileCardProps {
  className?: string
  data?: Profile
  formData?: Profile
  isReadonly?: boolean
  isLoading?: boolean
  error?: string
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: number) => void
  onChangeEmail?: (value: string) => void
  onChangePosition?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeCountry?: (value: Country) => void
  onChangeCurrency?: (value: Currency) => void
}

export const ProfileCard = ({
  className,
  data,
  formData,
  isReadonly = false,
  isLoading = false,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeEmail,
  onChangePosition,
  onChangeCity,
  onChangeCountry,
  onChangeCurrency,
}: ProfileCardProps) => {
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
      <ProfileNetworkBlock isReadonly={isReadonly} data={data} />
      <ProfileInfoBlock
        data={formData}
        isReadonly={isReadonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeEmail={onChangeEmail}
        onChangePosition={onChangePosition}
        onChangeCity={onChangeCity}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </div>
  );
};
