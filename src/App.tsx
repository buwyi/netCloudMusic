import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import routes from './routers';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

function App() {
  return (
    <>
      <AppHeader />
      <Suspense fallback="">
        <div className="useRoutes">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </>
  );
}

export default App;
