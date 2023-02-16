import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../services/api/store/auth-context";
import { DevSettings } from "react-native";
import * as SecureStore from "expo-secure-store";
import { UserData } from "../services/api/secureStorageConstants";
import ProfileRegisterDriver from "../components/profileRegisterDriver";
import Complaints from "../components/complaints";
import SelectDropdown from "react-native-select-dropdown";

export default function Profil() {
  useEffect(() => {
    fetchData(UserData);
  }, []);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const info = useContext(AuthContext);
  const [modalComplains, setModalComplains] = useState(false);
  const [name, setName] = useState("");
  const [emailUsr, setEmailUsr] = useState("");
  const [enteredDeliveryMethod, setEnteredDeliveryMethod] = useState("");

  const deliveryMethod = ["Mașină", "Motocicletă", "Scuter", "Bicicletă"];

  // const tookToken = info.token;
  // const nameToken = info.name;
  // const idToken = info.id;
  const userEmail = info.email;
  // asa se foloseste tokenul
  // console.log(info);
  // console.log(userEmail);
  function logOut() {
    SecureStore.deleteItemAsync(UserData);
    DevSettings.reload();
    // reload page to main
  }
  const fetchData = async (key) => {
    const result = await SecureStore.getItemAsync(key);
    if (result) {
      let a = JSON.parse(result);
      setName(a.name);
      setEmailUsr(a.email);
      // a.shiftStat = "Accepted";
      // console.log(a);
      // await SecureStore.setItemAsync(UserData, JSON.stringify(a));
      //mai sus am copiat tot ce era in Secure si am adaugat shiftStatus
    } else {
      console.log("No result passed");
    }
  };
  function registerADriver() {
    setModalIsVisible(true);
  }

  function closeRegisterPage() {
    setModalIsVisible(false);
  }
  function openComplaintsModal() {
    setModalComplains(true);
  }
  function closeCompointsModal() {
    setModalComplains(false);
  }
  return (
    <>
      <View style={styles.mainContainer}>
        <Complaints
          visible={modalComplains}
          closeCompointsModal={closeCompointsModal}
        />
        <View style={styles.contentContainer}>
          <ProfileRegisterDriver
            visible={modalIsVisible}
            cancelRegister={closeRegisterPage}
          />
          <Text style={styles.goalText2}>Bună, {name}</Text>
          <Text style={styles.goalText}>Email: {emailUsr}</Text>
          <Text style={styles.goalText}>Telefon:</Text>
          <Text style={styles.goalText}>Vehicul setat:</Text>
          <View style={styles.dropDownView}>
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
          </View>
          <Pressable onPress={registerADriver} style={styles.presableButton2}>
            <Text style={styles.presableText}>Înscrie un curier</Text>
          </Pressable>
          <Pressable
            onPress={openComplaintsModal}
            style={styles.presableButton2}
          >
            <Text style={styles.presableText}>Sesizări</Text>
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
    width: 250,
    height: 200,
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
    height: 50,
  },
});
