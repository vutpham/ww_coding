import { START_UP_ACTION } from '../actions/startUpActions';
import merge from 'lodash/merge';

const defaultState = {
  success: false
};

const startUpReducer = (state = defaultState, action) => {
  switch(action.type) {
    case START_UP_ACTION:
      const success = action.success;
      return merge({}, state, {success});
    default:
      return state;
  }
};

export default startUpReducer;
