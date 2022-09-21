import { Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from '../config/routerConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
