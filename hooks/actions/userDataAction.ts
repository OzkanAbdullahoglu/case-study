import { SET_USER_DATA, UserData, UserDataActionTypes } from '../types';

//redux fundamentals are not being used yet in this project
//this is a possible boiler setup for further usage

export function setUserData(userData: UserData): UserDataActionTypes {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}
