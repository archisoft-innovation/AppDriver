import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "./screens/calendar";
import Rapoarte from "./screens/reports";
import Comenzi from "./screens/orders";
import Profil from "./screens/profile";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";

const BottomTab = createBottomTabNavigator();

export default function LoggedIn() {
  const [shift, setShift] = useState(false);
  // let a = false;
  // if (a === 1) {
  //   return (
  //     <View style={styles.appContainer2}>
  //       <Some />
  //     </View>
  //   );
  // } else return <GoalInput />;

  function requestInShift() {
    alert("request intrare in tura");
    setShift(true);
  }
  function requestOutShift() {
    setShift(false);
    alert("request iesire in tura");
  }
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
          },
          headerRight: function test() {
            if (shift) {
              return (
                <View style={styles.shiftAll}>
                  <Pressable style={styles.shift} onPress={requestOutShift}>
                    <Ionicons name="radio-button-on" color="red" size="20" />
                    <Text style={styles.headerRightText}>Iesi din tura</Text>
                  </Pressable>
                </View>
              );
            }
          },
          headerLeft: function test() {
            if (!shift) {
              return (
                <View style={styles.shiftAll}>
                  <Pressable style={styles.shift} onPress={requestInShift}>
                    <Ionicons name="radio-button-on" color="green" size="20" />
                    <Text style={styles.headerRightText}>Intra in tura</Text>
                  </Pressable>
                </View>
              );
            }
          },
        }}
      >
        <BottomTab.Screen
          name="Comenzi"
          component={Comenzi}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color="white" size="24" />
            ),
            // headerShown: false,
          }}
          screenOptions={{ headerShown: false }}
        />
        <BottomTab.Screen
          name="Rapoarte"
          component={Rapoarte}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart" color="white" size="24" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color="white" size="24" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profil"
          component={Profil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="man" color="white" size="24" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
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
  headerRightText: {
    color: "white",
    fontSize: 18,
  },
  shift: {
    flexDirection: "row",
  },
  shiftAll: {
    // backgroundColor: "#06b4e0",
    // backgroundColor: "#06b4e0",
    // borderColor: "#06b4e0",
    padding: 2,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
  },
});
