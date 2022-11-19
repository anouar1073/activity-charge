import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  LogBox,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapView from "react-native-maps";

import SixtScreen from "./SixtScreen.js";
import OurScreen from "./OurScreen.js";
import colors from "./constants.js";

LogBox.ignoreLogs(["Remote debugger"]);
const Tab = createBottomTabNavigator();

export default function App() {
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
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sixt tab" component={SixtScreen} />
        <Tab.Screen
          name="Our tab"
          children={() => <OurScreen events={events} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles1 = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
  newsFeedStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

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
