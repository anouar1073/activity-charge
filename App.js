import * as React from "react";
import {LogBox} from "react-native";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import SixtScreen from "./SixtScreen.js";
import OurScreen from "./OurScreen.js";
import EventNavigator from "./EventNavigator.js";

LogBox.ignoreLogs(["Remote debugger"]);
const Tab = createBottomTabNavigator();

export default function App() {


    const MyTheme = {
        ...DefaultTheme,
        colors: {
            background: '#191919'
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "#ff5f00",
                tabBarInactiveTintColor: "#808080",
                tabBarStyle: {
                    backgroundColor: '#262626',
                    borderTopColor: 'transparent',
                    fontSize: 10,
                }
            }}>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="key-outline" color={focused ? "#ff5f00" : "#808080"} size={25}/>
                    ),
                }} name="Rent" component={SixtScreen}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="car-outline" color={focused ? "#ff5f00" : "#808080"} size={25}/>
                    ),
                }} name="Share" component={SixtScreen}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="car-sport-outline" color={focused ? "#ff5f00" : "#808080"} size={25}/>
                    ),
                }} name="Ride" component={SixtScreen}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="add-circle-outline" color={focused ? "#ff5f00" : "#808080"} size={25}/>
                    ),
                }} name="Auto Abo" component={SixtScreen}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="leaf-outline" color={focused ? "#ff5f00" : "#808080"} size={25}/>
                    ),
                }} unmountOnBlur={true} name="Activity" children={() => <EventNavigator/>}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="log-in-outline" color={focused ? "#ff5f00" : "#808080"} size={25}/>
                    ),
                }} name="Logout" component={SixtScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}





