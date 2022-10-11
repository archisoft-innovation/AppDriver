import { useState } from "react";
import GoalItem from "./components/Auth/GoalItem";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/Auth/Auth";
import { StatusBar } from "expo-status-bar";
import Some from "./components/Auth/Some";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShiftCall from "./screens/shiftCall";
import LoggedIn from "./LoggedIn";

const BottomTab = createBottomTabNavigator();

export default function App() {
  // let a = 0;
  // if (a === 1) {
  //   return (
  //     <View style={styles.appContainer2}>
  //       <Some />
  //     </View>
  //   );
  // } else return <GoalInput />;
  return (
    // <ShiftCall />
    // <Some />
    // <GoalInput />
    <LoggedIn />
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  appContainer2: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
});
