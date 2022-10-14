import { StyleSheet, View, Text, Pressable } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../services/api/store/auth-context";
import { useNavigation } from "@react-navigation/native";
import { DevSettings } from "react-native";

export default function Profil() {
  const info = useContext(AuthContext);
  const navigation = useNavigation();
  // const navigation = useNavigation();
  // const [context, setContext] = useState(info);
  console.log(info);
  const tookToken = info.token;
  const nameToken = info.name;
  const idToken = info.id;
  // asa se foloseste tokenul

  function logOut() {
    console.log("logout function");
    // navigation.replace("GoalInput");
    // navigation.navigate("Comenzi");
    // navigation.navigate("LoggedIn", { screen: "Some" });
    DevSettings.reload();
    // reload page to main
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.goalText2}>Bună, {nameToken}</Text>
      <Text style={styles.goalText2}>context.token: </Text>
      <Text style={styles.goalText}>Email:{tookToken}</Text>
      <Text style={styles.goalText}>Telefon {idToken}</Text>
      <Pressable style={styles.presableButton}>
        <Text style={styles.presableText}>Înscrie un curier</Text>
      </Pressable>
      <Text style={styles.goalText}>Vehicul setat:</Text>
      <View style={styles.inputContainer}>
        <View style={styles}></View>
        <View></View>
      </View>
      <Pressable onPress={logOut} style={styles.presableButton}>
        <Text style={styles.presableText}>Deconectare</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
    fontSize: 20,
  },
  goalText2: {
    marginTop: 40,
    color: "white",
    padding: 8,
    fontSize: 20,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#06b4e0",
    padding: 20,
  },
  presableButton: {
    width: 200,
    backgroundColor: "grey",
    padding: 8,
    // alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginBottom: 8,
  },
  presableText: {
    color: "white",
  },
});
