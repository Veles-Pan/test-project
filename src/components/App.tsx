import { Routes, Route, Link } from 'react-router-dom'
import '../styles/main.scss'
import { CounterPageAsync } from '../pages/CounterPage/CounterPage.async'
import { MainPageAsync } from '../pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from '../utils/theme/useTheme'
import { classNames } from '../utils/helpers/classNames'

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
          <Route path="/counter" element={<CounterPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
