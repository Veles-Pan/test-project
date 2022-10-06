import { useTranslation } from 'react-i18next';
import { Button, classNames } from 'shared';
import { ButtonThemes } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <h1>{t('page-error.title')}</h1>
      <Button theme={ButtonThemes.RELOAD} onClick={reloadPage}>
        {
          t('page-error.button')
        }
      </Button>
    </div>
  );
};
