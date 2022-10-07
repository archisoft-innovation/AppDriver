import { useState } from "react";
import GoalItem from "./components/Auth/GoalItem";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/Auth/Auth";
import { StatusBar } from "expo-status-bar";
import Some from "./components/Auth/Some";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "./screens/calendar";
import Rapoarte from "./screens/reports";
import Comenzi from "./screens/orders";
import Profil from "./screens/profile";
import { Ionicons } from "@expo/vector-icons";
import ShiftCall from "./screens/shiftCall";

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
    <ShiftCall />
    //   <NavigationContainer>
    //     <BottomTab.Navigator
    //       screenOptions={{
    //         headerStyle: { backgroundColor: "red" },
    //         headerTintColor: "white",
    //       }}
    //     >
    //       <BottomTab.Screen
    //         name="Comenzi"
    //         component={Comenzi}
    //         options={{
    //           tabBarIcon: ({ color, size }) => <Ionicons name="list" />,
    //           headerShown: false,
    //         }}
    //         screenOptions={{ headerShown: false }}
    //       />
    //       <BottomTab.Screen
    //         name="Rapoarte"
    //         component={Rapoarte}
    //         options={{
    //           tabBarIcon: ({ color, size }) => <Ionicons name="bar-chart" />,
    //         }}
    //       />
    //       <BottomTab.Screen
    //         name="Calendar"
    //         component={Calendar}
    //         options={{
    //           tabBarIcon: ({ color, size }) => <Ionicons name="calendar" />,
    //         }}
    //       />
    //       <BottomTab.Screen
    //         name="Profil"
    //         component={Profil}
    //         options={{
    //           tabBarIcon: ({ color, size }) => <Ionicons name="man" />,
    //         }}
    //       />
    //     </BottomTab.Navigator>
    //   </NavigationContainer>
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
