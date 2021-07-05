import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfilesScreen from '../screens/ProfilesScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { BottomTabParamList, ProfilesListParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Profiles"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          backgroundColor: Colors[colorScheme].background,
        },
      }}
    >
      <BottomTab.Screen
        name="Profiles"
        component={ProfilesNavigator}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const ProfilesStack = createStackNavigator<ProfilesListParamList>();

function ProfilesNavigator() {
  const colorScheme = useColorScheme();
  return (
    <ProfilesStack.Navigator>
      <ProfilesStack.Screen
        name="ProfilesScreen"
        component={ProfilesScreen}
        options={{
          headerTitle: '',
          headerTransparent: false,
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
          },
        }}
      />
      <ProfilesStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          headerTitle: '',
          headerTransparent: false,
          headerBackTitleVisible: false,
          headerBackImage: () => null,
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
          },
        }}
      />
    </ProfilesStack.Navigator>
  );
}
