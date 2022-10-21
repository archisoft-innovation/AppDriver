import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import DatePicker from "react-native-modern-datepicker";
export default function Calendar() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisibility, setmodalVisibility] = useState(false);
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + "-" + month + "-" + date);
  }, []);
  function test(id) {
    // console.log("changed");
    // setSelectedDate(date);
    // (newValue) => setSelectedDate(newValue);
    // console.log(selectedDate);
    // console.log(id);
    setSelectedDate(id);
    // ceva nu e ok aici, da aflu maine. nu apuca sa se salveze statul si la log apare mereu cel din urma
    setmodalVisibility(false);
    console.log(selectedDate);
  }
  function setModalVisible() {
    setmodalVisibility(true);
  }
  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={setModalVisible}>
        <Text>Pick a date</Text>
      </Pressable>
      <Modal visible={modalVisibility}>
        <View style={styles.inputContainer}>
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
            // onSelectedChange={(newValue) => setSelectedDate(newValue)}
            onSelectedChange={(newValue) => test(newValue)}
            current={currentDate}
            // selected="2020-07-23"
            mode="calendar"
            // minuteInterval={30}
            style={{ borderRadius: 10 }}
          />
        </View>
      </Modal>

      <View style={styles.goalItem}>
        <View style={styles.hoursViews}>
          <View style={styles.bordersBottom}>
            <Pressable style={styles.firstPres}>
              <Text style={styles.goalText}>08:00</Text>
            </Pressable>
          </View>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>10:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>12:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>14:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>16:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>18:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>20:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>22:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>00:00</Text>
          </Pressable>
        </View>

        <View style={styles.hoursViews}>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>09:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>11:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>13:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>15:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>17:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>19:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>21:00</Text>
          </Pressable>
          <Pressable style={styles.presables}>
            <Text style={styles.goalText}>23:00</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hoursViews: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "red",
  },
  goalText: {
    color: "white",
    padding: 20,
  },
  firstViewHour: {
    marginLeft: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },
  rowsViews: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  presables: {
    padding: 6,
  },
  firstPres: {
    padding: 6,
    backgroundColor: "green",
  },
  bordersBottom: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
