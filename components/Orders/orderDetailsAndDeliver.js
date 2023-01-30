import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  Linking,
} from "react-native";
import { setOrderDelivered } from "../../services/api/ordersService";
import FinalOrderDetailsModal from "./finalOrderDetailsModal";

export default function OrderDetailsAndDeliver(props) {
  function call() {
    const url = "tel://" + props.deliveryClientPhone;
    Linking.openURL(url);
  }
  function mapAddress() {
    let latitude = props.deliveryLat;
    let longitude = props.deliveryLong;
    let label = props.deliveryAddress;
    let url = Platform.select({
      ios: "maps:" + latitude + "," + longitude + "?q=" + label,
      android: "geo:" + latitude + "," + longitude + "?q=" + label,
    });
    Linking.openURL(url);
  }
  const [modalIsVisibleInside, setModalIsVisibleInside] = useState(false);
  function orderDelivered() {
    //request de inchidere comanda, dupa inchidere modal existent + child modal
    setModalIsVisibleInside(true);
    console.log("in orderDelivered");
    props.getOrdersToPassCompleted();
    setOrderDelivered(props.orderID);
    // props.finishOrderDel();
  }
  function closeAllModalls() {
    setModalIsVisibleInside(false);
    props.finishOrderDel();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <FinalOrderDetailsModal
        orderCode={props.orderCode}
        delivery_man_fee={props.delivery_man_fee}
        price_per_km={props.price_per_km}
        base_price={props.base_price}
        driver_bonus={props.driver_bonus}
        paymentMethod={props.paymentMethod}
        totalPrice={props.totalPrice}
        deliveryDistance={props.deliveryDistance}
        finishOrderDel={closeAllModalls}
        visible={modalIsVisibleInside}
      />
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.goalText}>Detalii comandă</Text>
            <View style={styles.shiftBContainer}>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Cod comandă</Text>
                <Text style={styles.pickupTimeColor}>{props.orderCode}</Text>
              </View>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Metoda de plată</Text>
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
            <Text style={styles.goalText}>Detalii client</Text>

            <View style={styles.shiftBContainer}>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Nume Client</Text>
                <Text style={styles.pickupTimeColor}>
                  {props.deliveryClientName}
                </Text>
              </View>
              <Pressable onPress={call}>
                <View style={styles.shiftContainer}>
                  <Text style={styles.pickupTimeColor}>Telefon Client</Text>
                  <Text style={styles.pickupTimeColor}>
                    {props.deliveryClientPhone}
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={mapAddress}>
                <View style={styles.shiftContainer}>
                  <Text style={styles.pickupTimeColor}>Adresă Client</Text>
                  {/* <Text style={styles.pickupTimeColor}>
                  {props.deliveryAddress}
                </Text> */}
                </View>
                <View style={styles.shiftContainer}>
                  <Text style={styles.pickupTimeColor}>
                    {props.deliveryAddress}
                  </Text>
                </View>
              </Pressable>
            </View>
            <Text style={styles.goalText}>Sumar Comandă</Text>

            <View style={styles.shiftBContainer}>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>Total KM</Text>
                <Text style={styles.pickupTimeColor}>
                  {props.deliveryDistance / 1000 + " KM"}
                </Text>
              </View>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>
                  Observații de la client:
                </Text>
                {/* <Text style={styles.pickupTimeColor}>{props.deliveryNote}</Text> */}
              </View>
              <View style={styles.shiftContainer}>
                <Text style={styles.pickupTimeColor}>{props.deliveryNote}</Text>
              </View>
            </View>
            <Pressable
              onPress={props.closeDetailsModal}
              style={styles.presableButton}
            >
              <Text style={styles.presableText}>Inapoi</Text>
            </Pressable>
            <Pressable onPress={orderDelivered} style={styles.presableButton}>
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
