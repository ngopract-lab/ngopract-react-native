// Reducer is a function that accepts a state and returns a new state
// it IS a pure function
import { combineReducers } from 'redux';

import userStatusReducer from './userStatusReducer';

const FETCH_USER_STATUS = 'FETCH_USER_STATUS';

const rootReducer = combineReducers({ userStatusData: userStatusReducer });

export default rootReducer;
