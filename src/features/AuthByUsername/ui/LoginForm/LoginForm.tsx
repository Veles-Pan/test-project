import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button, classNames, DynamicReducersLoader, Input, Text, TextThemes, useAppDispatch,
} from 'shared';
import { ReducersList } from 'shared/components/DynamicReducersLoader/DynamicReducersLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
  onSuccessfulLogin: () => void
}

const initialRedusers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccessfulLogin }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const loginError = useSelector(getLoginError);
  const loginIsLoading = useSelector(getLoginLoading);

  const usernameOnChangeHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const passwordOnChangeHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClickHandler = useCallback(async () => {
    // @ts-ignore
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccessfulLogin();
    }
  }, [dispatch, onSuccessfulLogin, password, username]);

  return (
    <DynamicReducersLoader reducers={initialRedusers}>
      <form className={classNames(styles.form, {}, [className])}>
        <Text title={t('login-form.text')} />
        {loginError && <Text text={loginError} theme={TextThemes.ERROR} />}
        <Input value={username} onChange={usernameOnChangeHandler} placeholder="Username" />
        <Input value={password} onChange={passwordOnChangeHandler} type="password" placeholder="Password" />
        <Button disabled={loginIsLoading} onClick={onLoginClickHandler}>{t('login-form.button')}</Button>
      </form>

    </DynamicReducersLoader>
  );
});

export default LoginForm;
