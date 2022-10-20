import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Image,
  Text,
  Pressable,
  Modal,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function AcceptedOrders(props) {
  const [pickUpTime, setPickUpTime] = useState(true);
  // de vazut la pickUpTime cum sa rezolv, daca intra o data si selecteaza un timp, urmatoarea data cand intru nu-i mai cere
  const hours = [30, 40, 50, 60];

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.goalText}>
              Seteaza timpul aproximativ in care ajungi la partenerul{" "}
              {"Nume Partener"} dupa comanda {"Nume comanda"}
            </Text>

            <View style={styles.shiftBContainer}>
              <View style={styles.shiftContainer}>
                <SelectDropdown
                  defaultButtonText={"Setează timp pick up"}
                  data={hours}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                  onSelect={(selectedItem, index) => {
                    // console.log(selectedItem, index);
                    setPickUpTime(false);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Metoda de plata</Text>
                <Text style={styles.pickupTimeColor}>{"Metoda de plata"}</Text>
              </View>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Valoare</Text>
                <Text style={styles.pickupTimeColor}>{"38.21 Ron"}</Text>
              </View>
            </View>
            <Pressable
              disabled={pickUpTime}
              onPress={props.onTheRoad}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>Sunt pe drum</Text>
            </Pressable>
            <View style={styles.readySet}>
              {/* <Image
              style={styles.image}
              source={require("../assets/images/gpsNavigator.png")}
            /> */}
            </View>
          </View>
        </View>
      </View>
    </Modal>
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

  goalText: {
    color: "white",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  image: {
    width: 200,
    height: 240,
    margin: 20,
  },
  readySet: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },

  readyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  shiftText: {
    fontSize: 20,
    marginLeft: 10,
  },
  shiftContainer: {
    padding: 10,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    justifyContent: "space-between",
    width: 300,
  },
  pickupTimeColor: {
    color: "white",
    fontSize: 16,
  },
  shiftBContainer: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#black",
  },
  switchMrg: {
    marginRight: 10,
  },
  presableButton: {
    backgroundColor: "orange",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginTop: 20,
  },
  presableText: {
    color: "white",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "orange",
  },
  dropdown1BtnTxtStyle: { color: "white" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "orange",
    borderBottomColor: "#06b4e0",
  },
  dropdown1RowTxtStyle: { color: "white" },
});
