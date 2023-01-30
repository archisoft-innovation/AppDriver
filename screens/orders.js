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
  async function seeOrders() {
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
  //   getOrders();
  // }, 60 * 2000);
  useEffect(() => {
    getOrders();
  }, []);
  async function getOrders() {
    // let newOrders = await getOrderDetails();
    setORders(await getOrderDetails());
    console.log("in getORders");
    // console.log(newOrders);
    setTimeout(getOrders, 60 * 1000);
  }
  async function getOrdersToPassCompleted() {
    setORders(await getOrderDetails());
  }
  function deleteAComponent(id) {
    console.log("in delete Component");
    // setTestObj((current) =>
    //   current.filter((employee) => {
    //     return employee.id !== id;
    //   })
    // );
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.shiftContainer}>
        <Text style={styles.goalText}>Câștiguri zilnice</Text>
        <Text style={styles.goalText}>{"Suma"} Ron</Text>
      </View>
      {/* <Pressable onPress={seeOrders}>
        <Text>Get orders test</Text>
        <Text>Get orders test</Text>
      </Pressable>
      <Pressable onPress={toBeDeleted2}>
        <Text>Let's see the orders</Text>
        <Text>Let's see the orders</Text>
      </Pressable> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewPad}
      >
        {orders.map((item, index) => {
          return (
            <Orders
              key={item.id}
              status={item.status}
              getOrdersToPassCompleted={getOrdersToPassCompleted}
              vendorName={item.vendor.name}
              vendorPhone={item.vendor.phone}
              vendorAddress={item.vendor.address}
              vendorLat={item.vendor.latitude}
              vendorLong={item.vendor.longitude}
              paymentMethod={item.payment_method.name}
              price_per_km={item.driver.price_per_km}
              base_price={item.driver.base_price}
              driver_bonus={item.driver.driver_bonus}
              delivery_man_fee={item.delivery_man_fee}
              created_at={item.created_at}
              notes={item.note}
              totalPrice={item.total}
              orderCode={item.code}
              orderID={item.id}
              deliveryAddress={item.delivery_address.address}
              deliveryLat={item.delivery_address.latitude}
              deliveryLong={item.delivery_address.longitude}
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
    padding: 16,
    backgroundColor: "#06b4e0",
    alignItems: "center",
    textAlign: "center",
  },
  scrollViewPad: {
    marginTop: 20,
  },
});
