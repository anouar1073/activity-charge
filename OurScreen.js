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
        "https://www.marienplatz-muenchen.de/wp-content/uploads/2019/06/muenchen-englischer-garten-2863483_pix.jpg",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      region: "Starnbergersee",
      imageUri:
        "https://c8.alamy.com/comp/2ARN2H0/fire-icon-flame-icon-isolated-vector-illustration-2ARN2H0.jpg",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      region: "Munich",
      imageUri:
        "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
                    uri: event.imageUri,
                  }}
                />
                <View style={styles.detailsContainer}>
                  <View style={styles.metaInformationContainer}>
                    <Text style={styles.metaInformation} numberOfLines={1}>
                      {event.region}
                    </Text>
                    <Text style={styles.metaInformation} numberOfLines={1}>
                      {"3.8 km"}
                    </Text>
                  </View>
                  <Text style={styles.description} numberOfLines={2}>
                    {event.description}
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
    marginBottom: 30,
    marginHorizontal: 10,
    overflow: "hidden",
    marginTop: 10,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#ff5f00",
  },
  metaInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metaInformation: {
    marginBottom: 7,
    fontWeight: "bold",
    color: "#191919",
    //fontFamily: "Menlo"
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "stretch",
  },
  description: {
    color: "#191919",
  },
});
