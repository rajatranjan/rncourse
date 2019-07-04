import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
//Register Screens
Navigation.registerComponent("awsome-places.AuthScreen", () => AuthScreen); //first argument is name identifier
Navigation.registerComponent(
  "awsome-places.SharePlaceScreen",
  () => SharePlaceScreen
);
Navigation.registerComponent(
  "awsome-places.FindPlaceScreen",
  () => FindPlaceScreen
);

//start App, doc about it is online in react native navigation guide
Navigation.startSingleScreenApp({
  screen: {
    screen: "awsome-places.AuthScreen",
    title: "Login"
  }
});
