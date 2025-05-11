import { useRoutes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import routes from './routers';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './pages/player/app-player-bar';
import { useAppDispatch, useAppSelector } from './store';
import { fetchCurrentSongAction } from './pages/player/store/player';
import LoginWindow from './components/login-window';
import { shallowEqual } from 'react-redux';
import { changeIsLoginAction } from './components/login-window/store';
import { fetchChangeUserAccount } from './store/modules/user';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongAction(5271858));
    if (localStorage.getItem('MUSIC_U')) {
      dispatch(changeIsLoginAction(true));
      dispatch(fetchChangeUserAccount());
    }
  }, []);
  const { showWindow } = useAppSelector(
    (state) => ({
      showWindow: state.login.showWindow,
    }),
    shallowEqual,
  );

  return (
    <>
      <AppHeader />
      <Suspense fallback="">
        <div className="useRoutes">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
      {showWindow && <LoginWindow />}
    </>
  );
}

export default App;
