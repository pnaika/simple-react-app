import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallInProgress
});

export default rootReducer;
