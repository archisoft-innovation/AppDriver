import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import DatePicker from "react-native-modern-datepicker";
export default function Calendar() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, seteleven] = useState(false);
  const [twelve, setTwelve] = useState(false);
  const [thirteen, setThirteen] = useState(false);
  const [fourteen, setFourteen] = useState(false);
  const [fifteen, setFifteen] = useState(false);
  const [sixteen, setsixteen] = useState(false);
  const [seventeen, setseventeen] = useState(false);
  const [eighteen, seteighteen] = useState(false);
  const [nineteen, setnineteen] = useState(false);
  const [twenty, settwenty] = useState(false);
  const [twentyOne, settwentyOne] = useState(false);
  const [twentyTwo, settwentyTwo] = useState(false);
  const [twentyThree, settwentyThree] = useState(false);
  const [twentyFour, settwentyFour] = useState(false);
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

  function switchTen() {
    setTen((current) => !current);
  }
  function switchtwelve() {
    setTwelve((current) => !current);
  }
  function switeleven() {
    seteleven((current) => !current);
  }
  function switchthirteen() {
    setThirteen((current) => !current);
  }
  function switchfourteen() {
    setFourteen((current) => !current);
  }
  function switchfifteen() {
    setFifteen((current) => !current);
  }
  function switchsixteen() {
    setsixteen((current) => !current);
  }
  function switchseventeen() {
    setseventeen((current) => !current);
  }
  function switcheighteen() {
    seteighteen((current) => !current);
  }
  function switchnineteen() {
    setnineteen((current) => !current);
  }
  function switchtwenty() {
    settwenty((current) => !current);
  }
  function switchtwentyOne() {
    settwentyOne((current) => !current);
  }
  function switchtwentyTwo() {
    settwentyTwo((current) => !current);
  }
  function switchtwentyThree() {
    settwentyThree((current) => !current);
  }
  function switchtwentyFour() {
    settwentyFour((current) => !current);
  }
  return (
    <View style={styles.inputContainerMain}>
      <Pressable onPress={setModalVisible}>
        <Text style={styles.heading}>Selectează data</Text>
      </Pressable>
      <Text>Data selectata</Text>
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
            // current={currentDate}
            // selected="2020-07-23"
            mode="calendar"
            // minuteInterval={30}
            style={{ borderRadius: 10 }}
          />
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewSt}></View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[styles.pres, ten ? styles.truePres : styles.falsePres]}
              onPress={switchTen}
            >
              <Text style={styles.pressText}> 10:00</Text>
            </Pressable>
            <Pressable
              style={[styles.pres, eleven ? styles.truePres : styles.falsePres]}
              onPress={switeleven}
            >
              <Text style={styles.pressText}>11:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[styles.pres, twelve ? styles.truePres : styles.falsePres]}
              onPress={switchtwelve}
            >
              <Text style={styles.pressText}> 12:00</Text>
            </Pressable>
            <Pressable
              style={[
                styles.pres,
                thirteen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchthirteen}
            >
              <Text style={styles.pressText}>13:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[
                styles.pres,
                fourteen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchfourteen}
            >
              <Text style={styles.pressText}> 14:00</Text>
            </Pressable>
            <Pressable
              style={[
                styles.pres,
                fifteen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchfifteen}
            >
              <Text style={styles.pressText}>15:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[
                styles.pres,
                sixteen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchsixteen}
            >
              <Text style={styles.pressText}> 16:00</Text>
            </Pressable>
            <Pressable
              style={[
                styles.pres,
                seventeen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchseventeen}
            >
              <Text style={styles.pressText}>17:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[
                styles.pres,
                eighteen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switcheighteen}
            >
              <Text style={styles.pressText}> 18:00</Text>
            </Pressable>
            <Pressable
              style={[
                styles.pres,
                nineteen ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchnineteen}
            >
              <Text style={styles.pressText}>19:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[styles.pres, twenty ? styles.truePres : styles.falsePres]}
              onPress={switchtwenty}
            >
              <Text style={styles.pressText}> 20:00</Text>
            </Pressable>
            <Pressable
              style={[
                styles.pres,
                twentyOne ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchtwentyOne}
            >
              <Text style={styles.pressText}>21:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[
                styles.pres,
                twentyTwo ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchtwentyTwo}
            >
              <Text style={styles.pressText}> 22:00</Text>
            </Pressable>
            <Pressable
              style={[
                styles.pres,
                twentyThree ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchtwentyThree}
            >
              <Text style={styles.pressText}>23:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.viewSt}>
          <View style={styles.presableBtn}>
            <Pressable
              style={[
                styles.pres,
                twentyFour ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchtwentyFour}
            >
              <Text style={styles.pressText}>00:00</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.goalItem}>
        {/* <View style={styles.rowsViews}>
          <View style={styles.presablesViews1}>
            <Pressable style={styles.presables}>
              <Text>08:00</Text>
            </Pressable>
          </View>
          <View style={styles.presablesViews}>
            <Pressable style={styles.presables}>
              <Text>09:00</Text>
            </Pressable>
          </View>
        </View> */}

        {/* <View style={styles.hoursViews}>
          <View style={styles.bordersBottom}>
            <Pressable
              style={[
                styles.pres,
                testTrue ? styles.truePres : styles.falsePres,
              ]}
              onPress={switchTen}

            >
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
        </View> */}

        {/* <View style={styles.hoursViews}>
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
        </View> */}
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
  inputContainerMain: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },
  rowsViews: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  presablesViews: {
    width: 60,
    backgroundColor: "green",
  },
  presablesViews1: {
    width: 60,
    backgroundColor: "green",
    marginRight: 20,
  },
  presables: {
    padding: 6,
  },
  pres: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  truePres: {
    backgroundColor: "green",
    borderColor: "green",
  },
  falsePres: {
    backgroundColor: "red",
    borderColor: "red",
  },
  firstPres: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "green",
    borderColor: "green",
  },
  falsePress: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "red",
    borderColor: "red",
  },
  pressText: {
    color: "white",
    fontSize: 16,
  },
  presableBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewSt: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "#fff",
  },
  heading: {
    fontSize: 20,
    color: "white",
  },
});
