import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames, Input } from 'shared';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const usernameOnChangeHandler = (value: string) => {
    setUsernameValue(value);
  };

  const passwordOnChangeHandler = (value: string) => {
    setPasswordValue(value);
  };
  return (
    <form className={classNames(styles.form, {}, [className])}>
      <p>{t('login-form.text')}</p>
      <Input value={usernameValue} onChange={usernameOnChangeHandler} placeholder="Username" />
      <Input value={passwordValue} onChange={passwordOnChangeHandler} type="password" placeholder="Password" />
      <Button>{t('login-form.button')}</Button>
    </form>
  );
};
