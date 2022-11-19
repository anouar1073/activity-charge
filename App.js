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
import EventNavigator from "./EventNavigator.js";

LogBox.ignoreLogs(["Remote debugger"]);
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Sixt tab"
          component={SixtScreen}
          unmountOnBlur={true}
        />
        <Tab.Screen
          unmountOnBlur={true}
          name="Our tab"
          children={() => <EventNavigator />}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
