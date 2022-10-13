import { useState } from "react";
import GoalItem from "./components/Auth/GoalItem";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/Auth/Auth";
import Some from "./components/Auth/Some";
import { UserData } from "./services/api/secureStorageConstants";
import * as SecureStore from "expo-secure-store";

import ShiftCall from "./screens/shiftCall";
import LoggedIn from "./LoggedIn";
import AuthContextProvider from "./services/api/store/auth-context";

export default function App() {
  let testLog = false;
  function mainRender() {
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

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      let a = JSON.parse(result);
      console.log(a.apiKey);
      return true;
    } else {
      console.log("No result passed");
      return false;
    }
  }

  return (
    // <ShiftCall />
    // <Some />
    // <GoalInput />
    // <LoggedIn />
    // mainRender()
    <AuthContextProvider>
      <>
        {!testLog && <LoggedIn />}
        {testLog && <GoalInput />}
      </>
    </AuthContextProvider>
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
