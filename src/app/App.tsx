import { Link } from 'react-router-dom'
import './styles/main.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { AppHeader } from 'widgets/AppHeader'

const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <AppHeader />
      <AppRouter />
    </div>
  )
}

export default App
