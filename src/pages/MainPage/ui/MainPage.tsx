import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <div className="main">
      <p>{t('main-welcome')}</p>
    </div>
  )
}

export default MainPage
