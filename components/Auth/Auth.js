import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import { DoLoghin } from "../../services/api/authorizationService";
import * as SecureStore from "expo-secure-store";
import { UserData } from "../../services/api/secureStorageConstants";
import { useContext } from "react";
import { AuthContext } from "../../services/api/store/auth-context";
import { useNavigation } from "@react-navigation/native";

export default function GoalInput(props) {
  const userInfo = useContext(AuthContext);
  // console.log(userInfo, " Goal input");
  const navigation = useNavigation();

  const [enteredEmailText, setEnteredEmailText] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  function emailInputHandler(enteredText) {
    setEnteredEmailText(enteredText);
  }
  function passwordInputHandler(enteredText) {
    setEnteredPassword(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredEmailText);
    setEnteredEmailText("");
    setEnteredPassword("");
  }
  async function myTest() {
    if (
      enteredEmailText.includes("@") &&
      enteredEmailText.length > 4 &&
      enteredPassword.length > 4
    ) {
      setEmailValidation(true);
      // console.log(enteredEmailText);
      // console.log(enteredPassword);
      // setEnteredEmailText("");
      // setEnteredPassword("");

      let test = await DoLoghin(enteredEmailText, enteredPassword);
      // console.log("all goodie");
      // console.log(test);
      // userInfo.authenticate(test.token);
      // userInfo.named(test.name);
      // console.log(userInfo.isAutheticated + " userinfo.isAutheticated");
      // console.log(userInfo.name + " userinfo.name");

      // save from data from login to useContext
      // if (await DoLoghin(enteredEmailText, enteredPassword)) {
      if (test) {
        console.log("returned true");
        userInfo.authenticate(test.token);
        userInfo.named(test.name);
        navigation.replace("LoggedIn");
      }
    } else {
      setEmailValidation(false);
      Alert.alert("Please check your entered credentials!");
    }
  }
  async function getValuesStore() {
    // console.log("in this one");
    let infoSecure = await getValueFor(UserData);
    console.log(infoSecure);
  }

  async function forgetPassword() {
    // getValueFor(UserData);
    console.log("forget Password btn");
  }
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      let a = JSON.parse(result);
      console.log(a);
      // console.log(a.apiKey);
      // console.log(a.name);
      // console.log(a.id);
    } else {
      console.log("No result passed");
    }
  }
  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logoAlb.png")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="E-mail"
        onChangeText={emailInputHandler}
        value={enteredEmailText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Parola"
        onChangeText={passwordInputHandler}
        value={enteredPassword}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Pressable onPress={myTest} style={styles.presableButton}>
            <Text style={styles.goalText}>Log In</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Pressable
            onPress={forgetPassword}
            style={styles.presableButtonForgetPass}
          >
            <Text style={styles.goalText}>Ati uitat parola?</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 180,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    padding: 16,
    backgroundColor: "#06b4e0",
  },
  textInput: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#06b4e0",
    backgroundColor: "white",
    width: "100%",
    marginRight: 8,
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  goalText: {
    color: "black",
    padding: 8,
  },
  presableButton: {
    width: 200,
    backgroundColor: "white",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
  },
  presableButtonForgetPass: {
    width: 200,
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
  },
});
