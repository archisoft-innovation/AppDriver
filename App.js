import { useEffect, useState, useContext } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/Auth/Auth";
import { UserData } from "./services/api/secureStorageConstants";
import * as SecureStore from "expo-secure-store";
import { AuthContext } from "./services/api/store/auth-context";
// import { AuthContext } from "../../services/api/store/auth-context";

import LoggedIn from "./LoggedIn";
import AuthContextProvider from "./services/api/store/auth-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterDriver from "./components/registerDriver";
import LoadingOverlay from "./components/Auth/LoadingOverlay";

const Stack = createNativeStackNavigator();

export default function App() {
  const userInfo = useContext(AuthContext);
  const [storeSec, setStoreSec] = useState(false);
  // useEffect(() => {
  //   console.log("USef effect log");
  //   // declare the data fetching function
  //   const fetchData = async (key) => {
  //     const result = await SecureStore.getItemAsync(key);
  //     if (result) {
  //       let a = result;
  //       // console.log(a);
  //       userInfo.authenticate(a.token);
  //       userInfo.named(a.name);
  //       console.log(
  //         userInfo.isAutheticated + " log user info is or not autheticated"
  //       );

  //       return (
  //         <Stack.Navigator
  //           screenOptions={{
  //             headerShown: false,
  //           }}
  //         >
  //           <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
  //           <Stack.Screen name="LoggedIn" component={LoggedIn} />
  //           <Stack.Screen name="GoalInput" component={GoalInput} />
  //           {/* <Stack.Screen name="Some" component={Some} /> */}
  //         </Stack.Navigator>
  //       );
  //     } else {
  //       console.log("No result passed");
  //       return (
  //         <Stack.Navigator
  //           screenOptions={{
  //             headerShown: false,
  //           }}
  //         >
  //           <Stack.Screen name="LoggedIn" component={LoggedIn} />
  //           <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
  //           <Stack.Screen name="GoalInput" component={GoalInput} />
  //           {/* <Stack.Screen name="Some" component={Some} /> */}
  //         </Stack.Navigator>
  //       );
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
      userInfo.authenticate(a.apiKey);
      userInfo.named(a.name);
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
          <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
          <Stack.Screen name="GoalInput" component={GoalInput} />
          {/* <Stack.Screen name="Some" component={Some} /> */}
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
          <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
          {/* <Stack.Screen name="Some" component={Some} /> */}
        </Stack.Navigator>
      );
    }
  }
  // return <LoadingOverlay message={"În curs de logare"} />;
  return (
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
