import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import Main from 'pages/main';

const Mine = lazy(() => import('pages/mine'));
const UnKnown = lazy(() => import('pages/unknown'));

export const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/main" />;
    },
  },
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    component: UnKnown,
  },
];
