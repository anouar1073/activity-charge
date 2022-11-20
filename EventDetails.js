import {Ionicons} from '@expo/vector-icons';
import { useState, useEffect } from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions,
    Button, TouchableHighlight, TouchableOpacity,
} from "react-native";
import MapView, {Marker} from "react-native-maps";

import ListItem from "./ListItem";
import AppText from "./AppText.js";
import * as React from "react";

export default function EventDetails({route, navigation}) {
    const listing = route.params;
    console.log(navigation);

    const [mapRegion, setMapRegion] = useState({
        latitude: 48.135124,
        longitude: 11.581981,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
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
            <MapView style={styles.map} region={mapRegion}>
                <Marker coordinate={mapRegion} title="Marker"/>
            </MapView>
            <View
                style={{
                    position: "absolute", //use absolute position to show button on top of the map
                    top: "1%", //for center align
                    alignSelf: "flex-start", //for align to right
                }}
            >
                <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
                    <View onPress style={styles.backContainer}>
                        <Ionicons name="chevron-back-outline" size={40} color={"#ff5f00"}/>
                    </View>
                </TouchableOpacity>
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
    backContainer: {
        marginTop: 35,
        marginLeft: 15,
    },
});
