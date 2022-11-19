import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OurScreen from "./OurScreen.js";
import EventDetails from "./EventDetails";

const Stack = createStackNavigator();

const EventNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={OurScreen} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
  </Stack.Navigator>
);

export default EventNavigator;
