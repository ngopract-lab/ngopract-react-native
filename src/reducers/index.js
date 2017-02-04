// Reducer is a function that accepts a state and returns a new state
// it IS a pure function
import { combineReducers } from 'redux';

import userStatusReducer from './userStatusReducer';

const FETCH_USER_STATUSES = 'FETCH_USER_STATUSES';

const rootReducer = combineReducers({ userStatusesData: userStatusReducer });

export default rootReducer;
