import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

import colors from "./constants.js";

export default function OurScreen({ events }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {events.map((event, index) => {
          return (
            <View key={index} style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
                }}
              />
              <View style={styles.detailsContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {"fake title"}
                </Text>
                <Text style={styles.subTitle} numberOfLines={2}>
                  {"fake sub"}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 40,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
