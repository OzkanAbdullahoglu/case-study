/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { StyleSheet } from 'react-native';

import { View, ViewWithBordersPrimary } from '../components/Themed';
import { LightText } from '../components/StyledText';

export const ListHeaderComponent: React.FC = () => (
  <View style={styles.container}>
    <LightText style={styles.title}>PROFILES</LightText>
    <View>
      <ViewWithBordersPrimary style={styles.path} />
      <ViewWithBordersPrimary style={styles.path} />
      <ViewWithBordersPrimary style={styles.path} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 42,
    paddingTop: 43,
    flexDirection: 'row',
  },
  path: {
    width: 30,
    marginBottom: 7,
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
  },
});
