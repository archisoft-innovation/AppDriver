import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import Orders from "../components/Orders/Orders";
import {
  getOrders,
  getOrdersMcs,
  getOrderDetails,
  getOrderDetails2,
} from "../services/api/ordersService";

export default function Comenzi() {
  const [orders, setORders] = useState([]);
  async function toBeDeleted() {
    // getOrders();
    // getOrdersMcs();
    // getOrderDetails();
    // getOrderDetails2();
    getOrders();
  }
  async function toBeDeleted2() {
    console.log(orders[0]);
    // console.log(orders[0].vendor.latitude);
    // console.log(orders[0].vendor.longitude);
  }
  // setInterval(() => {
  //   testt();
  // }, 10000);
  function testt() {
    console.log("test function:");
  }

  async function getOrders() {
    let newOrders = await getOrderDetails();
    setORders(await getOrderDetails());
    console.log(newOrders);
  }

  const [testObj, setTestObj] = useState([]);
  useEffect(() => {
    setTestObj(as);
  }, []);

  function deleteAComponent(id) {
    console.log("in delete Component");
    setTestObj((current) =>
      current.filter((employee) => {
        return employee.id !== id;
      })
    );
  }
  let as = [
    {
      id: 3643,
      orderCode: "smt_46_3639",
      note: " NR 4 VILA  client number: 0774493202",
      distance: 4.621,
      totalPrice: 53.86,
      subTotal: 53.86,
      driverBonus: null,
      orderExtraPrice: null,
      initialDeliveryFee: 15.62,
      initialDeliveryManFee: 15,
      clientName: "Client",
      clientPhone: "0774493202",
      clientEmail: "ef0eb256-7c89-444b-b339-3c2a67322d0d",
      deliveryAddress: "Strada Alexandru Vaida - Voievod, Timi?oara, România",
      city: "Timi?oara",
      vendorId: 46,
      vendorName: "Dopo Poco",
      vendorBaseDeliveryFee: 10,
      vendorDeliveryFee: 1,
      driverId: 2468,
      driverName: "Pincotan Raimond-Zsolt [TIM] [FRS]",
      driverPhone: "0784598146",
      driverPricePerKm: 0,
      driverBasePrice: 15,
      driverComission: 0,
      createdDate: "2022-10-18T19:25:52+00:00",
      updatedDate: "2022-10-18T19:25:52+00:00",
      status: "delivered",
      vendorAddress: "Strada Jiul 2, Timișoara, Romania",
      sayving: 0.62,
      deliveryManFee: 15,
      deliveryFee: 15.62,
      paymentMethod: "Se achita la ridicare",
    },
    {
      id: 3644,
      orderCode: "smt_42_3642",
      note: "  et7, ap64 client number: 0744792623",
      distance: 2.488,
      totalPrice: 188,
      subTotal: 188,
      driverBonus: null,
      orderExtraPrice: 2.65,
      initialDeliveryFee: 13.84,
      initialDeliveryManFee: 0,
      clientName: "Client",
      clientPhone: "0744792623",
      clientEmail: "01931317-d121-4679-aaee-7003b1fa95c5",
      deliveryAddress: "Strada Gheorghe Lazar 34, Timi?oara 300386, Romania",
      city: "Timi?oara",
      vendorId: 42,
      vendorName: "Little Hanoi",
      vendorBaseDeliveryFee: 10,
      vendorDeliveryFee: 1.1,
      driverId: 2471,
      driverName: "Curier Back-up ",
      driverPhone: "0759644967",
      driverPricePerKm: 0,
      driverBasePrice: 0,
      driverComission: 0,
      createdDate: "2022-10-19T11:53:38+00:00",
      updatedDate: "2022-10-19T11:53:38+00:00",
      status: "delivered",
      vendorAddress: "Strada Mărășești 9, Timișoara, Romania",
      sayving: 16.49,
      deliveryManFee: 0,
      deliveryFee: 16.49,
      paymentMethod: "Platita cu cardul",
    },
    {
      id: 3645,
      orderCode: "smt_42_3645",
      note: " Apt 2,gata in 20 min client number: 0720285052",
      distance: 4.822,
      totalPrice: 147,
      subTotal: 147,
      driverBonus: null,
      orderExtraPrice: null,
      initialDeliveryFee: 16.4,
      initialDeliveryManFee: 15,
      clientName: "Client",
      clientPhone: "0720285052",
      clientEmail: "9b90f2c8-cd11-48b0-a779-5211542941d2",
      deliveryAddress: "Strada Mircea cel Batrân 122a, Timi?oara, Romania",
      city: "Timi?oara",
      vendorId: 42,
      vendorName: "Little Hanoi2",
      vendorBaseDeliveryFee: 10,
      vendorDeliveryFee: 1.1,
      driverId: 2374,
      driverName: "Brad Alin [AZL] [TIM]",
      driverPhone: "0786214674",
      driverPricePerKm: 0,
      driverBasePrice: 15,
      driverComission: 0,
      createdDate: "2022-10-19T13:12:05+00:00",
      updatedDate: "2022-10-19T14:31:02+00:00",
      status: "delivered",
      vendorAddress: "Strada Mărășești 9, Timișoara, Romania",
      sayving: 1.4,
      deliveryManFee: 15,
      deliveryFee: 16.4,
      paymentMethod: "Platita cu cardul",
    },
  ];

  return (
    <View style={styles.inputContainer}>
      <View style={styles.shiftContainer}>
        <Text style={styles.goalText}>Câștiguri zilnice</Text>
        <Text style={styles.goalText}>{"Suma"} Ron</Text>
      </View>
      <Pressable onPress={toBeDeleted}>
        <Text>Get orders test</Text>
        <Text>Get orders test</Text>
      </Pressable>
      <Pressable onPress={toBeDeleted2}>
        <Text>Let's see the orders</Text>
        <Text>Let's see the orders</Text>
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewPad}
      >
        {orders.map((item, index) => {
          return (
            <Orders
              key={item.id}
              vendorName={item.vendor.name}
              vendorPhone={item.vendor.phone}
              vendorAddress={item.vendor.address}
              vendorLat={item.vendor.latitude}
              vendorLong={item.vendor.longitude}
              paymentMethod={item.payment_method.name}
              notes={item.note}
              totalPrice={item.total}
              orderCode={item.code}
              orderID={item.id}
              deliveryAddress={item.delivery_address.address}
              deliveryClientName={item.user.name}
              deliveryClientPhone={item.user.phone}
              deliveryNote={item.note}
              deliveryDistance={item.total_distance}
              deleteAComponent={deleteAComponent}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  shiftContainer: {
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  goalText: {
    color: "black",
    padding: 20,
    fontWeight: "bold",
  },

  inputContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
    alignItems: "center",
    textAlign: "center",
  },
  scrollViewPad: {
    marginTop: 20,
  },
});
