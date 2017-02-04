import { createStore } from 'redux';
import { connect } from 'react-redux';
import rootReducer from './reducers';

export const store = createStore(rootReducer);

const mapStateToProps = state => ({
  userStatusesData: state.userStatusesData,
});

const mapDispatchToProps = dispatch => ({
  // setNoteSearchTerm: noteSearchTerm => dispatch(setNoteSearchTerm(noteSearchTerm)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);
