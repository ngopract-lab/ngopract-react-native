import { createStore } from 'redux';
import { connect } from 'react-redux';
import rootReducer from '../reducers';
import { fetchUserProfile } from '../actions';

export const store = createStore(rootReducer);

const mapStateToProps = state => ({
  userStatusesData: state.userStatusesData,
  UserProfileData: state.userProfileData,
});

const mapDispatchToProps = dispatch => ({
  selectUserProfile: userId => dispatch(fetchUserProfile(userId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);
