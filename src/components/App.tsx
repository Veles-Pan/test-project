import { Counter } from './Counter'
import { Routes, Route, Link } from 'react-router-dom'
import '../styles/main.scss'
import MainPage from '../pages/MainPage/MainPage'
import CounterPage from '../pages/CounterPage/CounterPage'
import { CounterPageAsync } from '../pages/CounterPage/CounterPage.async'
import { MainPageAsync } from '../pages/MainPage/MainPage.async'
import { Suspense } from 'react'

const App = () => (
  <div className="app">
    <nav className="navigation">
      <Link className="link" to={'/'}>
        Main Page
      </Link>
      <Link className="link" to={'/counter'}>
        Counter Page
      </Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/counter" element={<CounterPageAsync />} />
        <Route path="/" element={<MainPageAsync />} />
      </Routes>
    </Suspense>
  </div>
)

export default App
