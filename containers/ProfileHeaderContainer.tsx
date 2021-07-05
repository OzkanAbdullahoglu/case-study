import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';

export const ProfileHeaderContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    paddingTop: 39,
  },
});
