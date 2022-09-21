import { Link } from 'react-router-dom'
import './styles/main.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <nav className="navigation">
        <Link className="link" to={'/'}>
          Main Page
        </Link>
        <Link className="link" to={'/counter'}>
          Counter Page
        </Link>
        <button className="button theme-button" onClick={toggleTheme}>
          Change Theme
        </button>
      </nav>
      <AppRouter />
    </div>
  )
}

export default App
