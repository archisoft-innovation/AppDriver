import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
  Pressable,
  Text,
  Switch,
  Alert,
} from "react-native";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";

import { useNavigation } from "@react-navigation/native";

export default function RegisterDriver(props) {
  const city = [
    "Cluj-Napoca",
    "Sibiu",
    "Târgu-Mureș",
    "Brașov",
    "Alba Iulia",
    "Arad",
    "Timișoara",
  ];
  const deliveryMethod = ["Mașină", "Motocicletă", "Scuter", "Bicicletă"];
  const aditionalInformations = ["Nu am PFA/SRL", "Am PFA/SRL"];
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
    } else {
      setEmailValidation(false);
      Alert.alert("Please check your entered credentials!");
    }
  }

  async function forgetPassword() {
    // getValueFor(UserData);
    console.log("forget Password btn");
  }
  function logDropdowns(id) {
    console.log("from dropdowns");
    console.log(id);
  }
  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.image}
        // source={require("../../assets/images/logoAlb.png")}
        source={require("../assets/images/logoAlb.png")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Nume"
        onChangeText={passwordInputHandler}
        value={enteredPassword}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Telefon"
        onChangeText={passwordInputHandler}
        value={enteredPassword}
      />
      <TextInput
        style={styles.textInput}
        placeholder="E-mail"
        onChangeText={emailInputHandler}
        value={enteredEmailText}
      />
      <View style={styles.dropDownView}>
        <SelectDropdown
          defaultButtonText={"Oraș"}
          data={city}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            logDropdowns(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        {/* </View>
      <View> */}
        <SelectDropdown
          defaultButtonText={"Cu ce vrei să livrezi"}
          data={deliveryMethod}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            logDropdowns(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        {/* </View>
      <View> */}
        <SelectDropdown
          defaultButtonText={"Informații adiționale"}
          data={aditionalInformations}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            logDropdowns(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
      <View style={styles.shiftBContainer}>
        <View style={styles.shiftContainer}>
          <Switch
            style={styles.switchMrg}
            trackColor={{ false: "white", true: "orange" }}
            thumbColor={isEnabled ? "white" : "white"}
            ios_backgroundColor="red"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.shiftText}>Accept termenii și condițiile</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Pressable onPress={myTest} style={styles.presableButton}>
            <Text style={styles.goalText}>Înregistrează</Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Pressable
            onPress={forgetPassword}
            style={styles.presableButtonForgetPass}
          >
            <Text style={styles.goalText}>Ati uitat parola?</Text>
          </Pressable>
        </View>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 140,
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
    color: "white",
    padding: 8,
    fontSize: 16,
  },
  presableButton: {
    width: 200,
    backgroundColor: "white",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 6,
    backgroundColor: "orange",
  },

  dropdown1BtnStyle: {
    flex: 1,
    height: 20,
    backgroundColor: "orange",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "orange",
    marginBottom: 4,
  },
  dropdown1BtnTxtStyle: { color: "white" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "orange",
    borderBottomColor: "#06b4e0",
  },
  dropdown1RowTxtStyle: { color: "white" },
  dropDownView: {
    height: 150,
  },
  shiftText: {
    fontSize: 20,
    marginLeft: 10,
  },
  shiftContainer: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    justifyContent: "space-between",
    width: 300,
    marginTop: 10,
    marginBottom: 10,
  },
  shiftBContainer: {
    alignItems: "center",
  },
  switchMrg: {
    marginRight: 10,
  },
});
