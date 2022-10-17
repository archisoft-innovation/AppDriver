import { useEffect, useState } from "react";
import GoalItem from "./components/Auth/GoalItem";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/Auth/Auth";
import Some from "./components/Auth/Some";
import { UserData } from "./services/api/secureStorageConstants";
import * as SecureStore from "expo-secure-store";

import ShiftCall from "./screens/shiftCall";
import LoggedIn from "./LoggedIn";
import AuthContextProvider from "./services/api/store/auth-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [storeSec, setStoreSec] = useState(false);
  // let storeSec = false;
  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async (key) => {
  //     const result = await SecureStore.getItemAsync(key);
  //     if (result) {
  //       let a = result;
  //       console.log(a);
  //       //aici am apikey etc de vazut
  //       storeSec = true;
  //       console.log(storeSec);
  //       return true;
  //     } else {
  //       console.log("No result passed");
  //       storeSec = false;
  //       console.log(storeSec);
  //       return false;
  //     }
  //   };
  //   fetchData(UserData).catch(console.error);
  // }, []);

  const fetchData = async (key) => {
    const result = await SecureStore.getItemAsync(key);
    if (result) {
      let a = result;
      console.log(a);
      //aici am apikey etc de vazut
      // storeSec = true;
      // console.log(storeSec);
      // return true;
      setStoreSec(true);
    } else {
      console.log("No result passed");
      // storeSec = false;
      // console.log(storeSec);
      // return false;
      setStoreSec(false);
    }
  };
  function mainRender() {
    fetchData(UserData);
    if (storeSec) {
      console.log("in storeSec True");
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
          <Stack.Screen name="GoalInput" component={GoalInput} />
          <Stack.Screen name="Some" component={Some} />
        </Stack.Navigator>
      );
    } else {
      console.log("in storeSec False");
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="GoalInput" component={GoalInput} />
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
          <Stack.Screen name="Some" component={Some} />
        </Stack.Navigator>
      );
    }
  }
  // mai jos de verificat inainte de stergere
  // function test2() {
  //   let testSome = getValueFor(UserData);
  //   console.log("log from test2 use effect on load");
  //   console.log(testSome);
  // }
  // async function getValueFor(key) {
  //   let result = await SecureStore.getItemAsync(key);
  //   if (result) {
  //     let a = JSON.parse(result);
  //     console.log(a.apiKey);
  //     return true;
  //   } else {
  //     console.log("No result passed");
  //     return false;
  //   }
  // }
  let testLog = true;
  function mainRender2() {
    console.log("something 2");
    // getValueFor(UserData);
    if (getValueFor(UserData)) {
      console.log("trueeee");
      return <LoggedIn />;
      return <GoalInput />;
      return <ShiftCall />;
    } else {
      console.log("Falseeee");
      return <GoalInput />;
    }
  }
  // mai sus de verificat inainte de stergere

  return (
    // <ShiftCall />
    // <Some />
    // <GoalInput />
    // <LoggedIn />
    // mainRender()
    <NavigationContainer>
      <AuthContextProvider>
        {mainRender()}
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="GoalInput" component={GoalInput} />
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
          <Stack.Screen name="Some" component={Some} />
        </Stack.Navigator> */}
        {/* <>
          {!testLog && <LoggedIn />}
          {testLog && <GoalInput />}
        </> */}
      </AuthContextProvider>
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
