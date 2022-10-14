import './styles/main.scss';
import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { ContentLoader } from 'widgets/ContentLoader';
import { AppRouter } from './providers/router';

const App = () => (
  <div className="app">
    <Suspense fallback={<ContentLoader />}>
      <AppHeader />
      <AppRouter />
      <Sidebar />
    </Suspense>
  </div>
);

export default App;
