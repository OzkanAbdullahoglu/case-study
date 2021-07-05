import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ProfileList from '../components/ProfileList';

export default function ProfilesScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <ProfileList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
