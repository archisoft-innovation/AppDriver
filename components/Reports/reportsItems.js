import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import RerpotsDetailsModal from "../Modals/reportsDetailsModal";

export default function ReportsItems(props) {
  const [modalIsVisibleDet, setModalIsVisibleDet] = useState(false);
  function closeModal() {
    setModalIsVisibleDet(false);
  }
  function openModal() {
    console.log("Modal");
    setModalIsVisibleDet(true);
  }
  return (
    <Pressable style={styles.viewSt} onPress={openModal}>
      <RerpotsDetailsModal
        vendorAddress={props.vendorAddress}
        deliveryAddress={props.deliveryAddress}
        distance={props.distance}
        deliveryManFee={props.deliveryManFee}
        totalPrice={props.totalPrice}
        xModal={closeModal}
        visible={modalIsVisibleDet}
      />
      <View style={styles.presableBtn}>
        <Text>Status:{" " + props.status}</Text>
        <Text>{props.orderCode}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  presableBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewSt: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
