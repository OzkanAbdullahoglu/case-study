import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ViewWithBordersSecondary } from '../components/Themed';

export const MapContainer: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      <ViewWithBordersSecondary style={styles.path} />
      {children}
      <ViewWithBordersSecondary style={styles.path} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.42,
    justifyContent: 'space-between',
  },
  path: {
    alignSelf: 'flex-end',
    width: '100%',
    borderBottomWidth: 1,
  },
});
