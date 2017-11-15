import { combineReducers } from 'redux';
import startUpReducer from './startUpReducer';

const rootReducer = combineReducers({
  startUp: startUpReducer
});

export default rootReducer;
