import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

export default function OrderDetailsAndDeliver(props) {
  function deliverOrder() {
    console.log(props.orderID + " orderDelivered");
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
            <View style={styles.shiftBContainer}>
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
            <View style={styles.shiftBContainer}>
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
            <Pressable
              onPress={props.closeDetailsModal}
              onPressIn={deliverOrder}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>Inapoi</Text>
            </Pressable>
            <Pressable
              onPress={props.deliver}
              onPressIn={deliverOrder}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>Comanda a fost livrată</Text>
            </Pressable>
          </View>
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
