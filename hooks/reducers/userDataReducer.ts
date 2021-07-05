import { SET_USER_DATA, UserDataState, UserDataActionTypes } from '../types';

//redux fundamentals are not being used yet in this project
//this is a possible boiler setup for further usage

export const initialState: UserDataState = {
  userList: [],
};

export const userDataReducer = (
  state = initialState,
  action: UserDataActionTypes
): UserDataState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userList: [...state.userList, { ...action.payload }],
      };
    default:
      return state;
  }
};
