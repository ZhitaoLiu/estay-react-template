import { hot } from 'react-hot-loader/root';
import React, { PureComponent, Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routers/index.js';

import AppHeader from 'components/app-header';
import AppFooter from 'components/app-footer';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="App">
            <AppHeader />
            {renderRoutes(routes)}
            <AppFooter />
          </div>
        </Suspense>
      </Router>
    );
  }
}

export default hot(App);
