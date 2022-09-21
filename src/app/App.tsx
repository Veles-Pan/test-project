import { Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/main.scss'

import { useTheme } from './providers/ThemeProvider'
import { CounterPage } from 'pages/CounterPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared'

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
