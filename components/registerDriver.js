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
import { saveForm } from "../services/sendDriverRegistration";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "./Auth/LoadingOverlay";

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
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmailText, setEnteredEmailText] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredDeliveryMethod, setEnteredDeliveryMethod] = useState("");
  const [enteredAditionalInformations, setEnteredAditionalInformations] =
    useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  function nameInputHandler(enteredText) {
    setEnteredName(enteredText);
  }
  function emailInputHandler(enteredText) {
    setEnteredEmailText(enteredText);
  }
  function phoneInputHandler(enteredText) {
    setEnteredPhone(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredEmailText);
    setEnteredEmailText("");
    setEnteredPhone("");
    setEmailValidation("");
  }
  async function registerDrv() {
    if (
      enteredEmailText.includes("@") &&
      enteredEmailText.length > 4 &&
      enteredName.length > 2 &&
      !isNaN(enteredPhone) &&
      enteredPhone.length > 9 &&
      isEnabled === true
    ) {
      setIsAuthenticating(true);
      // setEmailValidation(true);
      let info = driverData();
      // let allGood = await saveForm(info);
      let saveF = await saveForm(info);
      if (saveF) {
        console.log("in tru let saveF");
        setIsAuthenticating(false);
      } else {
        setIsAuthenticating(false);
        Alert.alert("Something went wrong!");
      }
      // console.log(info);
      // aici vine requestul saveForm, trebuie sa il si importez
      // if (allGood) {
      //   console.log("all good from registerDRV reregisterDriver Page");
      // } else if (!allGood) {
      //   throw console.error("error sending data");
      // }
      console.log("in true");
      // request de send
    } else if (isNaN(enteredPhone)) {
      Alert.alert("Nu ai introdus un numar de telefon valid!");
    } else if (enteredPhone.length < 9) {
      Alert.alert("Nu ai introdus un numar de telefon valid!");
    } else if (!enteredEmailText.includes("@")) {
      Alert.alert("Email nevalid!");
    } else if (enteredCity === "") {
      Alert.alert("Nu ai selectat Orașul!");
    } else if (enteredDeliveryMethod === "") {
      Alert.alert("Nu ai selectat modalitatea de livrare!");
    } else if (enteredAditionalInformations === "") {
      Alert.alert("Nu ai selectat informațiile adiționale!");
    } else if (isEnabled === false) {
      Alert.alert(
        "Pentru a continua, trebuie să accepți termenii și condițiile!"
      );
    } else {
      setEmailValidation(false);
      Alert.alert("Câmpuri incomplete!");
    }
  }

  function backToMain() {
    navigation.navigate("GoalInput");
  }

  function driverData() {
    var driverData = {
      driver: {
        name: enteredName,
        email: enteredEmailText,
        phoneNumber: enteredPhone,
        workCity: enteredCity,
        vehicle: enteredDeliveryMethod,
        companyPfaSrl: enteredAditionalInformations,
      },
    };
    return driverData;
  }
  if (isAuthenticating) {
    return (
      <LoadingOverlay message="Se trimit datele. Trebuie ceva sa il anunt ca am finalizat, un pop up sau ceva sa stie ca au fost trimise" />
    );
  } else {
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
          placeholderTextColor="grey"
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Telefon"
          placeholderTextColor="grey"
          onChangeText={phoneInputHandler}
          value={enteredPhone}
        />
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          placeholderTextColor="grey"
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
              setEnteredCity(selectedItem);
              // logDropdowns(selectedItem);
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
              setEnteredDeliveryMethod(selectedItem);
              // logDropdowns(selectedItem);
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
              setEnteredAditionalInformations(selectedItem);
              // logDropdowns(selectedItem);
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
            <Pressable onPress={registerDrv} style={styles.presableButton}>
              <Text style={styles.goalText}>Înregistrează</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Pressable
              onPress={backToMain}
              style={styles.presableButtonForgetPass}
            >
              <Text style={styles.goalTextBack}>Renunță</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
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
  goalTextBack: {
    color: "black",
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
