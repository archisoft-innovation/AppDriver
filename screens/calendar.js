import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import DatePicker from "react-native-modern-datepicker";
export default function Calendar() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + "-" + month + "-" + date);
  }, []);
  function test() {
    // console.log("changed");
    // setSelectedDate(date);
    // (newValue) => setSelectedDate(newValue);
    console.log(selectedDate);
  }
  return (
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
        onSelectedChange={(newValue) => setSelectedDate(newValue)}
        current={currentDate}
        // selected="2020-07-23"
        mode="calendar"
        // minuteInterval={30}
        style={{ borderRadius: 10 }}
      />
      <Pressable onPress={test}>
        <Text>Somehting</Text>
      </Pressable>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>Calendar Page</Text>
        <Text style={styles.goalText}>Calendar Page</Text>
        <Text style={styles.goalText}>Calendar Page</Text>
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
  },
  goalText: {
    color: "white",
    padding: 8,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },
});
