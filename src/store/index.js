import { createStore } from 'redux';
import { connect } from 'react-redux';
import rootReducer from '../reducers';
import { fetchUserProfile } from '../actions';

export const store = createStore(rootReducer);
