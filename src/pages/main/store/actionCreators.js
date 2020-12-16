import * as actionTypes from './constants';

import { getTopBanner } from '@/services/main.service.js';

const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNER,
    banners: res.banners,
  };
};

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
