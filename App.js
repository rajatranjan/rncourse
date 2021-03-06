import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

//Register Screens
//first argument is name identifier
Navigation.registerComponent(
  "awsome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awsome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awsome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);
//start App, doc about it is online in react native navigation guide
Navigation.startSingleScreenApp({
  screen: {
    screen: "awsome-places.AuthScreen",
    title: "Login"
  }
});
