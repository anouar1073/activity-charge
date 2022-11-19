import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  RefreshControl,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "./constants.js";
import routes from "./routes.js";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function OurScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const fetchData = async () => {
    console.log("fetching data...");
    let response = await fetch("google.com")
      .then(
        (response) => {
          return response;
        } // if the response is a JSON object
      )
      .then(
        (success) => success // Handle the success response object
      )
      .catch(
        (error) => error // Handle the error response object
      );
    console.log(response);
    return response;
  };

  const [events, setEvents] = React.useState([
    {
      region: "Ammersee",
      imageUri:
        "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
    },
    {
      region: "Starnbergersee",
      imageUri:
        "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
    },
    {
      region: "Munich",
      imageUri:
        "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
    },
  ]);

  const onRefresh = React.useCallback(async () => {
    // Hint: Make api call here
    setRefreshing(true);
    await fetchData().then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {console.log("tagggg")}
        {events.map((event, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                console.log("pressed");
                return navigation.navigate(routes.EVENT_DETAILS, {
                  event,
                });
              }}
            >
              <View style={styles.card}>
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
            </TouchableWithoutFeedback>
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
