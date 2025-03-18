import { useRoutes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useAppSelector, useAppDispatch } from './store';
import routes from './routers';
import { shallowEqual } from 'react-redux';
import { changeMessageAction } from './store/modules/counter';

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqual,
  );

  const dispatch = useAppDispatch();
  function handleMessage() {
    dispatch(changeMessageAction('hahahahah'));
  }

  return (
    <>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
        <h1>{count}</h1>
        <h1>{message}</h1>
        <button onClick={handleMessage}>change message</button>
      </div>
      <Suspense fallback="">
        <div className="useRoutes">{useRoutes(routes)}</div>
      </Suspense>
    </>
  );
}

export default App;
