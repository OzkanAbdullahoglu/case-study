import * as React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

interface MapProps {
  location: {
    latitude: string;
    longitude: string;
  };
}

const PIN_COLOR = '#6374f3';
const LAT_DELTA = 1;
const LON_DELTA = 1;

export const LocationView: React.FC<MapProps> = ({ location }): JSX.Element => {
  const { latitude, longitude } = location;
  const latToNumber = parseFloat(latitude);
  const longToNumber = parseFloat(longitude);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: latToNumber,
        longitude: longToNumber,
        latitudeDelta: LAT_DELTA,
        longitudeDelta: LON_DELTA,
      }}
      provider={PROVIDER_GOOGLE}
    >
      <Marker
        coordinate={{ latitude: latToNumber, longitude: longToNumber }}
        pinColor={PIN_COLOR}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
