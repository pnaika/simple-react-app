import * as types from '../action/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHOR_SUCCESS:
      console.log('in the reducer :', action.authors);
      return action.authors;

    default:
      return state;
  }
}
