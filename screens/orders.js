import { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import Orders from "../components/Orders/Orders";

export default function Comenzi() {
  const [testObj, setTestObj] = useState([]);
  function testFunction2() {
    console.log("test function 2");
    setTestObj(as);
  }
  function testFunction() {
    // console.log(testObj);
    console.log(typeof testObj);
  }
  function deleteAComponent(id) {
    console.log("in delete Component");
    console.log(id);
    setTestObj((current) =>
      current.filter((employee) => {
        return employee.id !== id;
      })
    );
    // (current) =>
    //   current.filter((employee) => {
    //     console.log(employee);
    //     setTestObj(employee.id !== id);
    //   });
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
    // {
    //   id: 3646,
    //   orderCode: "smt_42_3646",
    //   note: " casa client number: 0746117289",
    //   distance: 7.847,
    //   totalPrice: 144,
    //   subTotal: 144,
    //   driverBonus: 10,
    //   orderExtraPrice: 10,
    //   initialDeliveryFee: 19.73,
    //   initialDeliveryManFee: 15,
    //   clientName: "Client",
    //   clientPhone: "0746117289",
    //   clientEmail: "8ea01caf-9779-47ad-811f-31e0d1f9c389",
    //   deliveryAddress: "Strada Bistri?a 32, Dumbravi?a, Romania",
    //   city: "Dumbravi?a",
    //   vendorId: 42,
    //   vendorName: "Little Hanoi3",
    //   vendorBaseDeliveryFee: 10,
    //   vendorDeliveryFee: 1.1,
    //   driverId: 2470,
    //   driverName: "Badea Andrei [AZL] [TIM]",
    //   driverPhone: "0790 762 686",
    //   driverPricePerKm: 0,
    //   driverBasePrice: 15,
    //   driverComission: 0,
    //   createdDate: "2022-10-19T18:45:40+00:00",
    //   updatedDate: "2022-10-19T20:26:36+00:00",
    //   status: "delivered",
    //   vendorAddress: "Strada Mărășești 9, Timișoara, Romania",
    //   sayving: 4.73,
    //   deliveryManFee: 25,
    //   deliveryFee: 29.73,
    //   paymentMethod: "Se achita la ridicare",
    // },
    // {
    //   id: 3647,
    //   orderCode: "smt_42_3647",
    //   note: "  client number: 0771085277",
    //   distance: 3.92,
    //   totalPrice: 172,
    //   subTotal: 172,
    //   driverBonus: null,
    //   orderExtraPrice: null,
    //   initialDeliveryFee: 15.41,
    //   initialDeliveryManFee: 15,
    //   clientName: "Client",
    //   clientPhone: "0771085277",
    //   clientEmail: "37755b64-8d33-4770-807a-b368426069bb",
    //   deliveryAddress: "Strada Johann Heinrich Pestalozzi, Timi?oara, Romania",
    //   city: "Timi?oara",
    //   vendorId: 42,
    //   vendorName: "Little Hanoi4",
    //   vendorBaseDeliveryFee: 10,
    //   vendorDeliveryFee: 1.1,
    //   driverId: 2470,
    //   driverName: "Badea Andrei [AZL] [TIM]",
    //   driverPhone: "0790 762 686",
    //   driverPricePerKm: 0,
    //   driverBasePrice: 15,
    //   driverComission: 0,
    //   createdDate: "2022-10-19T18:48:03+00:00",
    //   updatedDate: "2022-10-19T20:02:46+00:00",
    //   status: "delivered",
    //   vendorAddress: "Strada Mărășești 9, Timișoara, Romania",
    //   sayving: 0.41,
    //   deliveryManFee: 15,
    //   deliveryFee: 15.41,
    //   paymentMethod: "Se achita la ridicare",
    // },
    // {
    //   id: 3648,
    //   orderCode: "smt_42_3648",
    //   note: " casa client number: 0740010508",
    //   distance: 13.847,
    //   totalPrice: 153,
    //   subTotal: 153,
    //   driverBonus: 15,
    //   orderExtraPrice: 15,
    //   initialDeliveryFee: 26.33,
    //   initialDeliveryManFee: 15,
    //   clientName: "Client",
    //   clientPhone: "0740010508",
    //   clientEmail: "796273ec-83d4-493c-b639-1344317d20de",
    //   deliveryAddress: "Strada Maslinului 26, Mo?ni?a Veche 307287, Romania",
    //   city: "Mo?ni?a Veche",
    //   vendorId: 42,
    //   vendorName: "Little Hanoi5",
    //   vendorBaseDeliveryFee: 10,
    //   vendorDeliveryFee: 1.1,
    //   driverId: 2473,
    //   driverName: "Covaci Roberta [AZL] [TIM]",
    //   driverPhone: "0773938044",
    //   driverPricePerKm: 0,
    //   driverBasePrice: 15,
    //   driverComission: 0,
    //   createdDate: "2022-10-20T11:30:35+00:00",
    //   updatedDate: "2022-10-20T12:42:45+00:00",
    //   status: "delivered",
    //   vendorAddress: "Strada Mărășești 9, Timișoara, Romania",
    //   sayving: 26.33,
    //   deliveryManFee: 15,
    //   deliveryFee: 41.33,
    //   paymentMethod: "Platita cu cardul",
    // },
    // {
    //   id: 3649,
    //   orderCode: "smt_42_3649",
    //   note: " ap1 client number: 0726417849",
    //   distance: 6.888,
    //   totalPrice: 140,
    //   subTotal: 140,
    //   driverBonus: null,
    //   orderExtraPrice: null,
    //   initialDeliveryFee: 18.68,
    //   initialDeliveryManFee: 15,
    //   clientName: "Client",
    //   clientPhone: "0726417849",
    //   clientEmail: "b9e69eec-a4d6-4e7b-b082-26b5c8855ac9",
    //   deliveryAddress: "ap.1, Strada Mure? 169, Timi?oara 307221, Romania",
    //   city: "Timi?oara",
    //   vendorId: 42,
    //   vendorName: "Little Hanoi6",
    //   vendorBaseDeliveryFee: 10,
    //   vendorDeliveryFee: 1.1,
    //   driverId: 2473,
    //   driverName: "Covaci Roberta [AZL] [TIM]",
    //   driverPhone: "0773938044",
    //   driverPricePerKm: 0,
    //   driverBasePrice: 15,
    //   driverComission: 0,
    //   createdDate: "2022-10-20T13:18:21+00:00",
    //   updatedDate: "2022-10-20T14:15:08+00:00",
    //   status: "delivered",
    //   vendorAddress: "Strada Mărășești 9, Timișoara, Romania",
    //   sayving: 3.68,
    //   deliveryManFee: 15,
    //   deliveryFee: 18.68,
    //   paymentMethod: "Se achita la ridicare",
    // },
  ];

  return (
    <View style={styles.inputContainer}>
      {/* <View style={styles.goalItem}> */}
      <View style={styles.shiftContainer}>
        <Text style={styles.goalText}>Câștiguri zilnice</Text>
        <Text style={styles.goalText}>{"Suma"} Ron</Text>
      </View>
      <Pressable onPress={testFunction2}>
        <Text>Set As to state</Text>
      </Pressable>
      <Pressable onPress={testFunction}>
        <Text>Test btn</Text>
      </Pressable>
      <Pressable onPress={deleteAComponent}>
        <Text>DELETE</Text>
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewPad}
      >
        {/* {renderOrdersTest()} */}
        {testObj.map((item, index) => {
          return (
            <Orders
              key={index}
              vendorName={item.vendorName}
              vendorPhone={item.driverPhone}
              vendorAddress={item.vendorAddress}
              paymentMethod={item.paymentMethod}
              totalPrice={item.totalPrice}
              orderCode={item.orderCode}
              orderID={item.id}
              deleteAComponent={deleteAComponent}
            />
          );
        })}
        {/* <Orders />
        <Orders />
        <Orders /> */}
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
