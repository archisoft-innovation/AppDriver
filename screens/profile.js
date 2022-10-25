import { StyleSheet, View, Text, Pressable } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../services/api/store/auth-context";
import { useNavigation } from "@react-navigation/native";
import { DevSettings } from "react-native";
import * as SecureStore from "expo-secure-store";
import { UserData } from "../services/api/secureStorageConstants";
import ProfileRegisterDriver from "../components/profileRegisterDriver";
export default function Profil() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const info = useContext(AuthContext);
  const navigation = useNavigation();

  // console.log(info);
  const tookToken = info.token;
  const nameToken = info.name;
  const idToken = info.id;
  // asa se foloseste tokenul

  function logOut() {
    SecureStore.deleteItemAsync(UserData);
    DevSettings.reload();

    // reload page to main
  }

  function registerADriver() {
    setModalIsVisible(true);
  }

  function closeRegisterPage() {
    setModalIsVisible(false);
  }
  return (
    <View style={styles.mainContainer}>
      <ProfileRegisterDriver
        visible={modalIsVisible}
        cancelRegister={closeRegisterPage}
      />
      <Text style={styles.goalText2}>Bună, {nameToken}</Text>
      <Text style={styles.goalText}>Email:</Text>
      <Text style={styles.goalText}>Telefon </Text>
      <Pressable onPress={registerADriver} style={styles.presableButton}>
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
