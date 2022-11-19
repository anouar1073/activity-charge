import { Platform } from "react-native";


export default {
  text: {
    color: "red",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
