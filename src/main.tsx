import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import _default from '@ant-design/dark-theme';
import { theme } from 'antd';

const { darkAlgorithm } = theme;

import './assets/css/index.css';

import App from '@/App.tsx';
import store from './store';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
    ,
  </ConfigProvider>,
);
