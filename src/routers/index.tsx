import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Song = lazy(() => import('@/pages/song'));
const Discover = lazy(() => import('@/pages/discover'));
const Recommend = lazy(() => import('@/pages/discover/c-pages/recommend'));
const Toplist = lazy(() => import('@/pages/discover/c-pages/toplist'));
const Playlist = lazy(() => import('@/pages/discover/c-pages/playlist'));
const Djradio = lazy(() => import('@/pages/discover/c-pages/djradio'));
const Artist = lazy(() => import('@/pages/discover/c-pages/artist'));
const Album = lazy(() => import('@/pages/discover/c-pages/album'));

const Download = lazy(() => import('@/pages/download'));
const Focus = lazy(() => import('@/pages/focus'));
const Mine = lazy(() => import('@/pages/mine'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/toplist',
        element: <Toplist />,
      },
      {
        path: '/discover/playlist',
        element: <Playlist />,
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/song',
    element: <Song />,
  },
];

export default routes;
