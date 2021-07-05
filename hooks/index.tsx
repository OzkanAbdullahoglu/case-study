import { combineReducers } from 'redux';
import { userDataReducer } from './reducers/userDataReducer';

//redux fundamentals are not being used yet in this project
//this is a possible boiler setup for further usage

const rootReducer = combineReducers({
  users: userDataReducer,
});

export default rootReducer;
