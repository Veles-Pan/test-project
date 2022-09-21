import './styles/main.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'
import { AppHeader } from 'widgets/AppHeader'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

const App = () => {
  const { t, i18n } = useTranslation()
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <AppHeader />
        <AppRouter />
        <Sidebar />
      </Suspense>
    </div>
  )
}

export default App
