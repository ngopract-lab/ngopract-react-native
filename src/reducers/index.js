// Reducer is a function that accepts a state and returns a new state
// it IS a pure function
import { combineReducers } from 'redux';

import userStatusReducer from './userStatusReducer';
import userProfileReducer from './userProfileReducer';

const FETCH_USER_STATUSES = 'FETCH_USER_STATUSES';
const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

const rootReducer = combineReducers({
  userStatusesData: userStatusReducer,
  userProfileData: userProfileReducer, 
});

export default rootReducer;
