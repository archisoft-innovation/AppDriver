import { StyleSheet, View, Text, Pressable, Image } from "react-native";
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
  const userEmail = info.email;
  // asa se foloseste tokenul
  // console.log(info);
  // console.log(userEmail);
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
    <>
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <ProfileRegisterDriver
            visible={modalIsVisible}
            cancelRegister={closeRegisterPage}
          />
          <Text style={styles.goalText2}>Bună, {nameToken}</Text>
          <Text style={styles.goalText}>Email: {userEmail}</Text>
          <Text style={styles.goalText}>Telefon:</Text>
          <Text style={styles.goalText}>Vehicul setat:</Text>
          <Text style={styles.goalText}>{tookToken}</Text>
          <Pressable onPress={registerADriver} style={styles.presableButton2}>
            <Text style={styles.presableText}>Înscrie un curier</Text>
          </Pressable>
          <View style={styles.inputContainer}>
            <View style={styles}></View>
            <View></View>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/images/profilePic.png")}
          />
        </View>

        <Pressable onPress={logOut} style={styles.presableButton}>
          <Text style={styles.presableText}>Deconectare</Text>
        </Pressable>
      </View>
    </>
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
    // marginTop: 10,
    marginBottom: 40,
    color: "white",
    padding: 8,
    fontSize: 26,
    fontWeight: "bold",
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
    backgroundColor: "red",
    padding: 8,
    // alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginBottom: 8,
  },
  presableButton2: {
    width: 200,
    backgroundColor: "orange",
    padding: 8,
    // alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginTop: 18,
  },
  presableText: {
    color: "white",
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 250,
    // margin: 20,
  },
});
