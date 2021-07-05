import { UserData, RootState } from '../types';

//redux fundamentals are not being used yet in this project
//this is a possible boiler setup for further usage

export const getUsersData = (state: RootState): UserData[] => {
  return state.users.userList;
};
