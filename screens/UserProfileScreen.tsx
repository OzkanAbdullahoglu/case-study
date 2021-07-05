import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { ProfileHeaderContainer } from '../containers/ProfileHeaderContainer';
import { MapContainer } from '../containers/MapContainer';
import { ProfileFooterContainer } from '../containers/ProfileFooterContainer';
import ProfileHeader from '../components/ProfileHeader';
import { LocationView } from '../components/LocationView';

interface RouteProps {
  route: {
    params: {
      userInfo: {
        firstName: string;
        lastName: string;
        age: number;
        gender: string;
        location: {
          latitude: string;
          longitude: string;
        };
      };
      imageUrl: string;
    };
  };
}

export default function UserProfileScreen({ route }: RouteProps): JSX.Element {
  const { userInfo, imageUrl } = route.params;
  const { firstName, lastName, gender, age, location } = userInfo;

  return (
    <View style={styles.container}>
      <ProfileHeaderContainer>
        <ProfileHeader
          firstName={firstName}
          lastName={lastName}
          imageUrl={imageUrl}
        />
      </ProfileHeaderContainer>
      <MapContainer>
        <LocationView location={location} />
      </MapContainer>
      <ProfileFooterContainer gender={gender} userAge={age} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});
