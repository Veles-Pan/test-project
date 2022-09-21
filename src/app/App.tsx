import { Link } from 'react-router-dom'
import './styles/main.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <header className="header">
        <NavBar />
        <button className="button theme-button" onClick={toggleTheme}>
          Change Theme
        </button>
      </header>
      <AppRouter />
    </div>
  )
}

export default App
