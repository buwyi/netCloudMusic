import { useRoutes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import routes from './routers';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './pages/player/app-player-bar';
import { useAppDispatch } from './store';
import { fetchCurrentSongAction } from './pages/player/store/player';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongAction(5271858));
  }, []);

  return (
    <>
      <AppHeader />
      <Suspense fallback="">
        <div className="useRoutes">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </>
  );
}

export default App;
