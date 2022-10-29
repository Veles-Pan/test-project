import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../model/slice/ProfileSlice';

interface EditableProfileCardProps {
  className?: string
}

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileFormData);
  const data = useSelector(getProfileData);
  const isReadonly = useSelector(getProfileReadonly);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  const onChangeFirstnameHandler = useCallback((value: string) => {
    dispatch(profileActions.updateForm({ first_name: value }));
  }, [dispatch]);

  const onChangeLastnameHandler = useCallback((value: string) => {
    dispatch(profileActions.updateForm({ last_name: value }));
  }, [dispatch]);

  const onChangeAgeHandler = useCallback((value: number) => {
    dispatch(profileActions.updateForm({ age: value }));
  }, [dispatch]);

  const onChangeEmailHandler = useCallback((value: string) => {
    dispatch(profileActions.updateForm({ email: value }));
  }, [dispatch]);

  const onChangePositionHandler = useCallback((value: string) => {
    dispatch(profileActions.updateForm({ position: value }));
  }, [dispatch]);

  const onChangeCityHandler = useCallback((value: string) => {
    dispatch(profileActions.updateForm({ city: value }));
  }, [dispatch]);

  const onChangeCountryHandler = useCallback((value: Country) => {
    dispatch(profileActions.updateForm({ country: value }));
  }, [dispatch]);

  const onChangeCurrencyHandler = useCallback((value: Currency) => {
    dispatch(profileActions.updateForm({ currency: value }));
  }, [dispatch]);
  return (
    <ProfileCard
      formData={formData}
      data={data}
      isLoading={isLoading}
      isReadonly={isReadonly}
      error={error}
      className={className}
      onChangeFirstname={onChangeFirstnameHandler}
      onChangeLastname={onChangeLastnameHandler}
      onChangeAge={onChangeAgeHandler}
      onChangeEmail={onChangeEmailHandler}
      onChangePosition={onChangePositionHandler}
      onChangeCity={onChangeCityHandler}
      onChangeCountry={onChangeCountryHandler}
      onChangeCurrency={onChangeCurrencyHandler}
    />
  );
};
