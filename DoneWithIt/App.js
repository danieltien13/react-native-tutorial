import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  // return <WelcomeScreen></WelcomeScreen>;
  return <ViewImageScreen></ViewImageScreen>;
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <AppButton
  //       title="Login"
  //       onPress={() => console.log("Tapped")}
  //     ></AppButton>
  //   </View>
  // );
  // return (
  //   <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
  //     <Card
  //       title="Red jacket for sale!"
  //       subTitle="$100"
  //       image={require("./app/assets/jacket.jpg")}
  //     ></Card>
  //   </View>
  // );
  // return <ListingDetailsScreen></ListingDetailsScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
