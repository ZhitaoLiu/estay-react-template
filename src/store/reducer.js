import { combineReducers } from 'redux';

import { reducer as mainReducer } from 'pages/main/store';

export default combineReducers({
  main: mainReducer,
});
