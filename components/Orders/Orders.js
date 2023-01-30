import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import { setOrderDelivered } from "../../services/api/ordersService";
import AcceptedOrders from "./AcceptOrders";
import ConfirmOrderPicked from "./confirmOrderPicked";
import FinalOrderDetailsModal from "./finalOrderDetailsModal";
import OrderDetailsAndDeliver from "./orderDetailsAndDeliver";

export default function Orders(props) {
  function call() {
    const url = "tel://" + props.vendorPhone;
    Linking.openURL(url);
  }

  function mapAddress() {
    let latitude = props.vendorLat;
    // let latitude = props.lat;
    let longitude = props.vendorLong;
    // let longitude = props.long;
    let label = props.vendorAddress;
    // let label = props.address;

    let url = Platform.select({
      ios: "maps:" + latitude + "," + longitude + "?q=" + label,
      android: "geo:" + latitude + "," + longitude + "?q=" + label,
    });
    Linking.openURL(url);
  }
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalIsVisibleFinalOrderDetails, setModalIsVisibleFinalOrderDetails] =
    useState(false);
  const [modalIsVisibleDetailsOrder, setModalIsVisibleDetailsOrders] =
    useState(false);
  const [modalIsVisibleConfirmOrder, setModalIsVisibleConfirmOrder] =
    useState(false);
  // const [pressed, setPressed] = useState(false);
  const [pressed, setPressed] = useState("acceptOrder");
  const [presableText, setPresableText] = useState("Acceptare comandă");
  function passFinishDeleteOrder() {
    setModalIsVisibleDetailsOrders(false);
    props.deleteAComponent(props.orderID);
    // setModalIsVisibleFinalOrderDetails(true);
  }
  function acceptOrder() {
    // conditiile pentru status
    console.log(props.status);
    if (pressed === "acceptOrder") {
      setModalIsVisible(true);
    } else if (pressed === "acceptedOrder") {
      setModalIsVisibleConfirmOrder(true);
      console.log("Accept order thing");
    } else if (pressed === "detailsOrder") {
      setModalIsVisibleDetailsOrders(true);
      console.log("here comes th modal order details");
    }
  }
  function closeConfirmOrderPickedModal() {
    setModalIsVisibleDetailsOrders(true);
    setModalIsVisibleConfirmOrder(false);
    setPressed("detailsOrder");
    setPresableText("Detalii comanda/ Livrare");
  }
  async function onTheWayOrder() {
    console.log(props.orderID + " order ID on accept order btn");
    setOrderDelivered(props.orderID);
    setPressed("acceptedOrder");
    setPresableText("Am ridicat comanda");
    // post accept order function

    // maybe refresh the page when he accepts the order
    setModalIsVisible(false);
  }
  function closeModalDetails() {
    setModalIsVisibleDetailsOrders(false);
  }

  function closeFinalOrderDetails() {
    setModalIsVisibleFinalOrderDetails(false);
  }

  return (
    <View style={styles.mainContainer}>
      <AcceptedOrders
        visible={modalIsVisible}
        onTheRoad={onTheWayOrder}
        vendorName={props.vendorName}
        orderCode={props.orderCode}
        paymentMethod={props.paymentMethod}
        totalPrice={props.totalPrice}
        orderID={props.orderID}
      />
      <ConfirmOrderPicked
        visible={modalIsVisibleConfirmOrder}
        closeModalConfirm={closeConfirmOrderPickedModal}
        vendorName={props.vendorName}
        orderCode={props.orderCode}
        orderID={props.orderID}
      />
      <OrderDetailsAndDeliver
        visible={modalIsVisibleDetailsOrder}
        vendorName={props.vendorName}
        orderCode={props.orderCode}
        paymentMethod={props.paymentMethod}
        totalPrice={props.totalPrice}
        orderID={props.orderID}
        deliveryAddress={props.deliveryAddress}
        deliveryClientName={props.deliveryClientName}
        deliveryClientPhone={props.deliveryClientPhone}
        deliveryNote={props.deliveryNote}
        deliveryDistance={props.deliveryDistance}
        price_per_km={props.price_per_km}
        driver_bonus={props.driver_bonus}
        delivery_man_fee={props.delivery_man_fee}
        deliveryLat={props.deliveryLat}
        deliveryLong={props.deliveryLong}
        base_price={props.base_price}
        getOrdersToPassCompleted={props.getOrdersToPassCompleted}
        closeDetailsModal={closeModalDetails}
        finishOrderDel={passFinishDeleteOrder}
      />
      {/* <FinalOrderDetailsModal
        orderCode={props.orderCode}
        paymentMethod={props.paymentMethod}
        totalPrice={props.totalPrice}
        deliveryDistance={props.deliveryDistance}
        visible={modalIsVisibleFinalOrderDetails}
        closeDetailsModal={closeFinalOrderDetails}
      /> */}
      <View style={styles.inLineText}>
        <Text style={styles.textPadding}>{props.orderCode}</Text>
        <Text style={styles.textPadding}>Status:{" " + props.status}</Text>
        {/* <Text style={styles.textPadding}>De achitat la {props.vendorName}</Text> */}
      </View>

      <View style={styles.inLineText}>
        <Text style={styles.textPadding}>Data </Text>
        <Text style={styles.textPadding}>{props.created_at} </Text>
      </View>
      <Text style={styles.textPadding}>Partener:{props.vendorName}</Text>
      <Pressable onPress={call}>
        <Text style={styles.textPadding}>Telefon:{props.vendorPhone}</Text>
      </Pressable>

      <Pressable onPress={mapAddress}>
        <Text style={styles.textPadding}>
          Adresa Partener:{" " + props.vendorAddress}
        </Text>
      </Pressable>
      <Text style={styles.textPadding}>
        Metoda de plata: {props.paymentMethod}
      </Text>
      <Text style={styles.textPadding}>Valoare:{props.totalPrice} Ron</Text>
      <Pressable onPress={acceptOrder} style={styles.presableButton}>
        <Text style={styles.pressableText}>{presableText}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    // alignItems: "center",
    // textAlign: "center",
    // flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  inLineText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPadding: {
    padding: 10,
  },
  presableButton: {
    width: 200,
    backgroundColor: "#06b4e0",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginBottom: 8,
  },
  pressableText: {
    color: "white",
  },
});
