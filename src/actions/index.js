import * as ActionTypes from './constants';

export const fetchUserProfile = userId => ({
  type: 'FETCH_USER_PROFILE',
  text: 'select user data from user id',
  payload: userId,
});
