import * as React from "react";
import {Image, StyleSheet} from "react-native";

export default function SixtScreen() {
  return (
        <Image style={styles.image}
            source={{
                uri: "https://www.sixt.de/socialMedia/sixt-preview-image.jpg",
            }}
        />
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "center",
        alignItems: "center",
        justifyContent: "center"
    }
})