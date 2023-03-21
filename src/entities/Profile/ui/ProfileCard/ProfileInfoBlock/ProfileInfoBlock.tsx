import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';

import {
  classNames, Input, InputThemes, Select, Text,
} from 'shared';
import { Profile, ValidateProfileError } from '../../../model/types/ProfileSchema';
import styles from './ProfileInfoBlock.module.scss';

interface ProfileInfoBlockProps {
  className?: string
  data?: Profile
  isReadonly?: boolean
  validationErrors?: ValidateProfileError[]
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: number) => void
  onChangeEmail?: (value: string) => void
  onChangePosition?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeCountry?: (value: Country) => void
  onChangeCurrency?: (value: Currency) => void
}

export const ProfileInfoBlock = ({
  className,
  data,
  isReadonly = false,
  validationErrors,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeEmail,
  onChangePosition,
  onChangeCity,
  onChangeCountry,
  onChangeCurrency,
}: ProfileInfoBlockProps) => {
  const { t } = useTranslation('profile');

  console.log(validationErrors, validationErrors?.find((error) => error === ValidateProfileError.LAST_NAME_REQUIRED));

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Text text={`${t('profile-card.first-name')}:`} />
      <Input
        onChange={onChangeFirstname}
        isReadonly={isReadonly}
        className={styles.input}
        value={data?.first_name}
        theme={
          validationErrors?.find((error) => error === ValidateProfileError.FIRST_NAME_REQUIRED)
            ? InputThemes.ERROR
            : undefined
        }
      />

      <Text text={`${t('profile-card.last-name')}:`} />
      <Input
        onChange={onChangeLastname}
        isReadonly={isReadonly}
        className={styles.input}
        value={data?.last_name}
        theme={
          validationErrors?.find((error) => error === ValidateProfileError.LAST_NAME_REQUIRED)
            ? InputThemes.ERROR
            : undefined
        }
      />

      <Text text="Email: " />
      <Input
        onChange={onChangeEmail}
        isReadonly={isReadonly}
        className={styles.input}
        value={data?.email}
        theme={
          validationErrors?.find((error) => error === ValidateProfileError.EMAIL_REQUIRED)
            ? InputThemes.ERROR
            : undefined
        }
      />

      <Text text={`${t('profile-card.position')}:`} />
      <Input
        onChange={onChangePosition}
        isReadonly={isReadonly}
        className={styles.input}
        value={data?.position}
      />

      <Text text={`${t('profile-card.age')}:`} />
      <Input
        onChange={onChangeAge}
        isReadonly={isReadonly}
        className={styles.input}
        value={data?.age}
        theme={
          validationErrors?.find((error) => error === ValidateProfileError.AGE_REQUIRED)
            ? InputThemes.ERROR
            : undefined
        }
      />

      <Text text={`${t('profile-card.country')}:`} />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        isReadonly={isReadonly}
      />

      <Text text={`${t('profile-card.city')}:`} />
      <Input
        onChange={onChangeCity}
        isReadonly={isReadonly}
        className={styles.input}
        value={data?.city}
      />

      <Text text={`${t('profile-card.currency')}:`} />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        isReadonly={isReadonly}
      />
    </div>
  );
};
