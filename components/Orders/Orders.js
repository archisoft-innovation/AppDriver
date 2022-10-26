import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import AcceptedOrders from "./AcceptOrders";

export default function Orders(props) {
  function call() {
    const url = "tel://" + props.vendorPhone;
    Linking.openURL(url);
  }

  function mapAddress() {
    let latitude = "40.7127753";
    // let latitude = props.lat;
    let longitude = "-74.0059728";
    // let longitude = props.long;
    let label = "New York, NY, USA";
    // let label = props.address;

    let url = Platform.select({
      ios: "maps:" + latitude + "," + longitude + "?q=" + label,
      android: "geo:" + latitude + "," + longitude + "?q=" + label,
    });
    Linking.openURL(url);
  }
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function acceptOrder() {
    setModalIsVisible(true);
  }
  function onTheWayOrder() {
    console.log(props.orderID + " order ID on accept order btn");
    // post accept order function

    // maybe refresh the page when he accepts the order
    setModalIsVisible(false);
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
      <View style={styles.inLineText}>
        <Text style={styles.textPadding}>{props.orderCode}</Text>
        <Text style={styles.textPadding}>De achitat la {props.vendorName}</Text>
      </View>
      <View style={styles.inLineText}>
        <Text style={styles.textPadding}>Data </Text>
        <Text style={styles.textPadding}>Suma 1250 Ron</Text>
      </View>
      <Text style={styles.textPadding}>Partener:{props.vendorName}</Text>
      <Pressable onPress={call}>
        <Text style={styles.textPadding}>Telefon:{props.vendorPhone}</Text>
      </Pressable>

      <Pressable onPress={mapAddress}>
        <Text style={styles.textPadding}>Adresa:{props.vendorAddress}</Text>
      </Pressable>
      <Text style={styles.textPadding}>
        Metoda de plata: {props.paymentMethod}
      </Text>
      <Text style={styles.textPadding}>Valoare:{props.totalPrice} Ron</Text>
      <Pressable onPress={acceptOrder} style={styles.presableButton}>
        <Text style={styles.pressableText}>Acceptare comandă</Text>
      </Pressable>
      {/* <Button title="sa" /> */}
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
