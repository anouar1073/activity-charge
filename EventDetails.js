import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import colors from "./constants";
import ListItem from "./ListItem";
import AppText from "./AppText.js";

export default function EventDetails({ route, navigation }) {
  const listing = route.params;
  console.log(navigation);

  const [mapRegion, setMapRegion] = useState({
    latitude: 48.135124,
    longitude: 11.581981,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
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
