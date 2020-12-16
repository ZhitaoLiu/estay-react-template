import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { topNavData } from '../../common/data-config.js';

import { AppHeaderWrapper, AppHeaderNavLeft, AppHeaderNavRight } from './style';

export default memo(function AppHeader() {
  return (
    <AppHeaderWrapper>
      <div className="m-top">
        <div className="m-top-center">
          <AppHeaderNavLeft>
            <a href="#/" className="logo">
              Estay
            </a>
            {topNavData.map((item) => {
              return (
                <NavLink key={item.name} exact className="nav-item" to={item.url}>
                  {item.name}
                </NavLink>
              );
            })}
          </AppHeaderNavLeft>
          <AppHeaderNavRight>
            <div>登录123</div>
          </AppHeaderNavRight>
        </div>
      </div>
    </AppHeaderWrapper>
  );
});
