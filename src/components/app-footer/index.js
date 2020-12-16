import React, { memo } from 'react';

import { AppFooterWrapper, AppFooterLeft, AppHeaderRight } from './style';

export default memo(function AppFooter() {
  return (
    <AppFooterWrapper>
      <div className="footer-center">
        <AppFooterLeft>尾部1</AppFooterLeft>
        <AppHeaderRight>尾部2</AppHeaderRight>
      </div>
    </AppFooterWrapper>
  );
});
