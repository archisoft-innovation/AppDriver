import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
  Modal,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../services/api/store/auth-context";
import ReportsItems from "../components/Reports/reportsItems";
import DatePicker from "react-native-modern-datepicker";
import { getOrdersMcs } from "../services/api/ordersService";

export default function Rapoarte() {
  const infoToUpdate = useContext(AuthContext);
  const [context, setContext] = useState(infoToUpdate);
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [modalVisibility2, setmodalVisibility2] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDate2, setCurrentDate2] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [reports, setReports] = useState({ rows: [] });
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [totals, settotals] = useState(0);
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + "-" + month + "-" + date);
    setSelectedDate(year + "-" + month + "-" + date);
    setSelectedDate2(year + "-" + month + "-" + date);
  }, []);
  function reportsBtn() {
    console.log(selectedDate);
    console.log(selectedDate2);
  }

  async function closeStartDateModal(id) {
    setSelectedDate(id.replaceAll("/", "-"));
    let totalEarn = 0;
    let bonus = 0;
    let totalsBig = 0;
    let response = await getOrdersMcs(selectedDate, selectedDate2);

    for (let i = 0; i < response.rows.length; i++) {
      if (response.rows[i].status === "delivered") {
        totalEarn = totalEarn + response.rows[i].deliveryManFee;
        if (isNaN(response.rows[i].driverBonus)) {
        } else {
          // console.log(response.rows[i].driverBonus);
          bonus = bonus + response.rows[i].driverBonus;
        }
      }
    }
    totalsBig = totalEarn + bonus;
    setReports(response);
    setBonuses(bonus.toFixed(2));
    setTotalEarnings(totalEarn.toFixed(2));
    settotals(totalsBig.toFixed(2));
    setmodalVisibility(false);
  }
  async function closeStartDateModal2(id) {
    setSelectedDate2(id.replaceAll("/", "-"));
    let totalEarn = 0;
    let bonus = 0;
    let totalsBig = 0;
    let response = await getOrdersMcs(selectedDate, selectedDate2);
    for (let i = 0; i < response.rows.length; i++) {
      if (response.rows[i].status === "delivered") {
        totalEarn = totalEarn + response.rows[i].deliveryManFee;
        if (isNaN(response.rows[i].driverBonus)) {
        } else {
          bonus = bonus + response.rows[i].driverBonus;
        }
      }
    }
    totalsBig = totalEarn + bonus;
    setReports(response);
    setBonuses(bonus.toFixed(2));
    setTotalEarnings(totalEarn.toFixed(2));
    settotals(totalsBig.toFixed(2));
    setmodalVisibility2(false);
  }

  function setModalVisible() {
    setmodalVisibility(true);
  }
  function setModalVisible2() {
    setmodalVisibility2(true);
  }
  function tobedeleted() {
    for (let i = 0; i < reports.rows.length; i++) {
      // console.log(reports.rows[i].status);
      // console.log(reports.rows[i].deliveryManFee);
      if (reports.rows[i].deliveryManFee > 0) {
        console.log(reports.rows[i].orderCode);
      }
    }
    // console.log(reports.rows[0].status);
    // console.log(reports.rows[0].deliveryManFee);
  }
  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={setModalVisible}>
        <Text style={styles.goalText}>
          Selecteaza data de pornire:{" " + selectedDate}
        </Text>
      </Pressable>
      <Pressable onPress={setModalVisible2}>
        <Text style={styles.goalText}>
          Selecteaza data de oprire:{" " + selectedDate2}
        </Text>
      </Pressable>

      <Modal visible={modalVisibility}>
        <View style={styles.inputContainerModal}>
          <Text>Some texts</Text>
          <DatePicker
            options={{
              backgroundColor: "#090C08",
              textHeaderColor: "#FFA25B",
              textDefaultColor: "#F6E7C1",
              selectedTextColor: "#fff",
              mainColor: "#F4722B",
              textSecondaryColor: "#D6C7A1",
              borderColor: "rgba(122, 146, 165, 0.1)",
            }}
            onSelectedChange={async (newValue) => {
              closeStartDateModal(newValue);
            }}
            // current={currentDate}
            mode="calendar"
            style={{ borderRadius: 10 }}
          />
        </View>
      </Modal>
      <Modal visible={modalVisibility2}>
        <View style={styles.inputContainerModal}>
          <DatePicker
            options={{
              backgroundColor: "#090C08",
              textHeaderColor: "#FFA25B",
              textDefaultColor: "#F6E7C1",
              selectedTextColor: "#fff",
              mainColor: "#F4722B",
              textSecondaryColor: "#D6C7A1",
              borderColor: "rgba(122, 146, 165, 0.1)",
            }}
            onSelectedChange={async (newValue) => {
              closeStartDateModal2(newValue);
            }}
            // current={currentDate}
            mode="calendar"
            style={{ borderRadius: 10 }}
          />
        </View>
      </Modal>
      <View style={styles.viewDst}>
        <Text style={styles.resume}>Total câștiguri</Text>
        <Text style={styles.goalText2}>{totals + " Ron"}</Text>
        <View>
          <View style={styles.distanta}>
            <Text style={styles.earnings}>Câștig din livrări:</Text>
            <Text style={styles.earnings2}>{totalEarnings + " Ron"}</Text>
          </View>
          <View style={styles.distanta}>
            <Text style={styles.earnings}>Bonusuri:</Text>
            <Text style={styles.earnings2}>{bonuses + " Ron"}</Text>
          </View>
          <View style={styles.distanta}>
            <Text style={styles.earnings}>Penalizări:</Text>
            <Text style={styles.earnings2}>{" Ron"}</Text>
          </View>
          <View>
            <Pressable onPress={tobedeleted}>
              <Text>Cevas</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewPad}
      >
        {reports.rows.map((item, index) => {
          return (
            <ReportsItems
              key={item.id}
              id={item.id}
              distance={item.distance}
              deliveryManFee={item.deliveryManFee}
              driverComission={item.driverComission}
              orderCode={item.orderCode}
              paymentMethod={item.paymentMethod}
              status={item.status}
              vendorName={item.vendorName}
              createdDate={item.createdDate}
              deliveryAddress={item.deliveryAddress}
              vendorAddress={item.vendorAddress}
              totalPrice={item.totalPrice}
              // deleteAComponent={deleteAComponent}
            />
          );
        })}
      </ScrollView>
      {/* <View style={styles.goalItem}>
        <Button title="Some btn" onPress={reportsBtn} />
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  reportItem: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  resume: {
    color: "black",
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },
  inputContainerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },
  presableBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewDst: {
    alignItems: "center",
    textAlign: "center",
    padding: 4,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  distanta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  earnings: {
    fontWeight: "bold",
    marginRight: 40,
  },
  earnings2: {
    fontWeight: "bold",
  },
});
