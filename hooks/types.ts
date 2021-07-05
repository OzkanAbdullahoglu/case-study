/* redux type definitions */
//redux fundamentals are not being used yet in this project
//this is a possible boiler setup for further usage

export const SET_USER_DATA = 'SET_USER_DATA';

interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: UserData;
}

export type UserDataActionTypes = SetUserDataAction;

export interface RootState {
  users: UserDataState;
}

export interface UserDataState {
  userList: UserData[];
}
/* redux type definitions */

export interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
  uuid: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
