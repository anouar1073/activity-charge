import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {

  const [mapRegion, setMapRegion] = useState({
    latitude: 48.135124,
    longitude: 11.581981,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map} 
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
