import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import ThemeProvider from './utils/theme/themeProvide'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
