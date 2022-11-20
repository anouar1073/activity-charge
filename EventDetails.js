import { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import ListItem from "./ListItem";
import AppText from "./AppText.js";

export default function EventDetails({ route, navigation }) {
  const time = route.params.time;

  const [attractionRegion, setAttractionRegion] = useState({
    latitude: time.AttractionLocationLat,
    longitude: time.AttractionLocationLng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [chargerRegion, setChargerRegion] = useState({
    latitude: time.ChargerLocationLat,
    longitude: time.ChargerLocationLng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    setAttractionRegion({
      latitude: time.AttractionLocationLat,
      longitude: time.AttractionLocationLng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    setChargerRegion({
      latitude: time.ChargerLocationLat,
      longitude: time.ChargerLocationLng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [time]);

  return (
    <View>
      <MapView style={styles.map} region={attractionRegion}>
        <Marker coordinate={attractionRegion} title="Attraction" />
        <Marker coordinate={chargerRegion} title="Charger" pinColor="blue" />
      </MapView>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "1%", //for center align
          alignSelf: "flex-start", //for align to right
        }}
      >
        <Button
          onPress={() => navigation.goBack()}
          style={{ opacity: 0.5 }}
          title="Back"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  button: {
    backgroundColor: "black",
    opacity: 0.5,
  },
});
