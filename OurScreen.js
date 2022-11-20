import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  RefreshControl,
  TextInput,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import routes from "./routes.js";
import times from "./backend/tests/times.json";
import { Slider } from "@miblanchard/react-native-slider";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function OurScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(15);
  const fetchData = async () => {
    const options = {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let response = await fetch("https://131.159.209.218:5000/")
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
    return response;
  };

  const onRefresh = React.useCallback(async () => {
    // Hint: Make api call here
    times.reverse();
    setRefreshing(true);
    await fetchData().then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={["#ff5f00"]}
            tintColor={"#ff5f00"}
            placeholder="useless placeholder"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                flex: 1,
                color: "white",
              }}
            >
              Radius
            </Text>
            <Slider
              animateTransitions={true}
              thumbStyle={{
                backgroundColor: "#ff5f00",
              }}
              trackStyle={{
                backgroundColor: "#ff5f00",
              }}
              style={{
                alignSelf: "center",
                padding: 40,
                flex: 2,
              }}
              value={sliderValue}
              onValueChange={(value) => setSliderValue(value)}
            />
          </View>
        </View>
        {times.map((time, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                return navigation.navigate(routes.EVENT_DETAILS, {
                  time,
                });
              }}
            >
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={{
                    uri: time.AttractionImageURL,
                  }}
                />
                <View style={styles.detailsContainer}>
                  <View style={styles.metaInformationContainer}>
                    <Text style={styles.metaInformation} numberOfLines={1}>
                      {time.AttractionName}
                    </Text>
                    <Text style={styles.metaInformation} numberOfLines={1}>
                      {time.WalkTimeSeconds
                        ? `${Math.floor(
                            Number(time.WalkTimeSeconds) / 60
                          )} minutes`
                        : `3 minutes`}
                    </Text>
                  </View>
                  <Text style={styles.description} numberOfLines={2}>
                    {time.AttractionDescription}
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
    paddingTop: 10,
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
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "stretch",
  },
  description: {
    color: "#191919",
  },
  input: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.5,
    marginTop: 30,
    height: 40,
    width: "40%",
    marginLeft: "50%",
    borderRadius: 2,
    borderWidth: 1,
    padding: 10,
    zIndex: 10,
  },
});
