import { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {
  setDriverArrivingTime,
  setOrderOnTheRoute,
} from "../../services/api/ordersService";

export default function AcceptedOrders(props) {
  const [pickUpTime, setPickUpTime] = useState(true);
  const [pickUpTime2, setPickUpTime2] = useState("");
  const mins = [
    "10 minute",
    "20 minute",
    "30 minute",
    "40 minute",
    "50 minute",
    "60 minute",
  ];
  // props.orderID orderIdul
  function sendPickupTimeOrder() {
    // console.log(pickUpTime2 + " selected time");

    let arringTime = setDriverArrivingTime(props.orderID, pickUpTime2);
    // console.log(props.orderID + " order id din sendPickupTimeORder");
    let delOrder = setOrderOnTheRoute(props.orderID);

    // setPickUpTime(false);
    // send pickup time reqeust comes here, above are selected minutes and order id
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.goalText}>
              Seteaza timpul aproximativ in care ajungi la partenerul
              {" " + props.vendorName} dupa comanda {" " + props.orderCode}
            </Text>

            <View style={styles.shiftBContainer}>
              <View style={styles.shiftContainer}>
                <SelectDropdown
                  defaultButtonText={"Setează timp pick up"}
                  data={mins}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                  onSelect={(selectedItem, index) => {
                    // console.log(selectedItem, index);
                    setPickUpTime2(selectedItem.slice(0, 2));
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
                <Text style={styles.pickupTimeColor}>
                  {props.paymentMethod}
                </Text>
              </View>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Valoare</Text>
                <Text style={styles.pickupTimeColor}>
                  {props.totalPrice + " Ron"}
                </Text>
              </View>
            </View>
            {/* <Pressable
              onPress={props.closeModalAcceptedOrDers}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>
                Inapoi de vazut cum sa arate mai bine
              </Text>
            </Pressable> */}
            <Pressable
              disabled={pickUpTime}
              onPress={props.onTheRoad}
              onPressIn={sendPickupTimeOrder}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>Sunt pe drum</Text>
            </Pressable>
            <View style={styles.readySet}></View>
          </View>
        </View>
        <View style={styles.readySet}>
          <Image
            style={styles.image}
            source={require("../../assets/images/acceptOrderModal.png")}
          />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
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
  readySet: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    justifyContent: "center",
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
