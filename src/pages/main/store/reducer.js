import * as actionTypes from './constants';

const defaultState = {
  banners: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
};
