import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "./screens/calendar";
import Rapoarte from "./screens/reports";
import Comenzi from "./screens/orders";
import Profil from "./screens/profile";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function LoggedIn() {
  // let a = 0;
  // if (a === 1) {
  //   return (
  //     <View style={styles.appContainer2}>
  //       <Some />
  //     </View>
  //   );
  // } else return <GoalInput />;
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
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
});
