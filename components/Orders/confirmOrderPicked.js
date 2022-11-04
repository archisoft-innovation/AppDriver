import { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";

export default function ConfirmOrderPicked(props) {
  // props.orderID orderIdul
  function orderPickedFromVendor() {
    console.log("order Picked");
    // function to accept order
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.goalText}>
              Ai ridicat comanda {" " + props.orderCode + "  "} de la partenerul
              {" " + props.vendorName}?
            </Text>
            <Text>
              Prin confirmare cu "Da", te vom redirectiona catre datele de
              contact a clientului.
            </Text>
            <Text>Obs</Text>
            <Text>
              Clientul primeste automat un SMS cu confirmarea comenzii cat si cu
              datele tale de contact dupa ce confirmi comanda ca a fost ridicata
            </Text>
            <Pressable
              onPress={props.closeModalConfirm}
              onPressIn={orderPickedFromVendor}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>Comanda a fost ridicată</Text>
            </Pressable>
            <View style={styles.readySet}>
              <Image
                style={styles.image}
                source={require("../../assets/images/gpsNavigator.png")}
              />
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
