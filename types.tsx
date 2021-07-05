import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Profiles: undefined;
};

export type ProfilesListParamList = {
  ProfilesScreen: undefined;
  UserProfileScreen: undefined;
};

export type UserProfileScreenRouteProp = RouteProp<
  ProfilesListParamList,
  'UserProfileScreen'
>;
