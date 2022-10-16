import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, classNames, Input, Text, TextThemes,
} from 'shared';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { loginActions } from '../../model/slice/LoginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const usernameValue = useSelector(getLoginUsername);
  const passwordValue = useSelector(getLoginPassword);
  const loginError = useSelector(getLoginError);
  const loginIsLoading = useSelector(getLoginLoading);

  const usernameOnChangeHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const passwordOnChangeHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClickHandler = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username: usernameValue, password: passwordValue }));
  }, [dispatch, passwordValue, usernameValue]);

  return (
    <form className={classNames(styles.form, {}, [className])}>
      <Text title={t('login-form.text')} />
      {loginError && <Text text={loginError} theme={TextThemes.ERROR} />}
      <Input value={usernameValue} onChange={usernameOnChangeHandler} placeholder="Username" />
      <Input value={passwordValue} onChange={passwordOnChangeHandler} type="password" placeholder="Password" />
      <Button disabled={loginIsLoading} onClick={onLoginClickHandler}>{t('login-form.button')}</Button>
    </form>
  );
});
