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
import {
  createDriverSchedule,
  getScheduleer,
} from "../services/api/calendarService";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState("");
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
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
  const [scheduler, setScheduler] = useState([]);
  const [allHours, setAllHours] = useState([
    // { blocked: false, hour: 0, working: twentyFour },
    // { blocked: false, hour: 1, working: true },
    // { blocked: false, hour: 2, working: false },
    // { blocked: false, hour: 3, working: false },
    // { blocked: false, hour: 4, working: false },
    // { blocked: false, hour: 5, working: false },
    // { blocked: false, hour: 6, working: false },
    // { blocked: false, hour: 7, working: false },
    // { blocked: false, hour: 8, working: false },
    // { blocked: false, hour: 9, working: false },
    // { blocked: false, hour: 10, working: ten },
    // { blocked: false, hour: 11, working: eleven },
    // { blocked: false, hour: 12, working: twelve },
    // { blocked: false, hour: 13, working: thirteen },
    // { blocked: false, hour: 14, working: fourteen },
    // { blocked: false, hour: 15, working: fifteen },
    // { blocked: false, hour: 16, working: sixteen },
    // { blocked: false, hour: 17, working: seventeen },
    // { blocked: false, hour: 18, working: eighteen },
    // { blocked: false, hour: 19, working: nineteen },
    // { blocked: false, hour: 20, working: twenty },
    // { blocked: false, hour: 21, working: twentyOne },
    // { blocked: false, hour: 22, working: twentyTwo },
    // { blocked: false, hour: 23, working: twentyThree },
    { blocked: false, hour: 0, working: false },
    { blocked: false, hour: 1, working: false },
    { blocked: false, hour: 2, working: false },
    { blocked: false, hour: 3, working: false },
    { blocked: false, hour: 4, working: false },
    { blocked: false, hour: 5, working: false },
    { blocked: false, hour: 6, working: false },
    { blocked: false, hour: 7, working: false },
    { blocked: false, hour: 8, working: false },
    { blocked: false, hour: 9, working: false },
    { blocked: false, hour: 10, working: false },
    { blocked: false, hour: 11, working: false },
    { blocked: false, hour: 12, working: false },
    { blocked: false, hour: 13, working: false },
    { blocked: false, hour: 14, working: false },
    { blocked: false, hour: 15, working: false },
    { blocked: false, hour: 16, working: false },
    { blocked: false, hour: 17, working: false },
    { blocked: false, hour: 18, working: false },
    { blocked: false, hour: 19, working: false },
    { blocked: false, hour: 20, working: false },
    { blocked: false, hour: 21, working: false },
    { blocked: false, hour: 22, working: false },
    { blocked: false, hour: 23, working: false },
  ]);
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + "-" + month + "-" + date);
  }, []);

  async function getSchedulerForDriver(date) {
    let a = await getScheduleer(date);
    if (a) {
      setScheduler(a);
      setHoursRender(a);
    }
  }
  function setHoursRender(id) {
    setTen(id[10].working);
    seteleven(id[11].working);
    setTwelve(id[12].working);
    setThirteen(id[13].working);
    setFourteen(id[14].working);
    setFifteen(id[15].working);
    setsixteen(id[16].working);
    setseventeen(id[17].working);
    seteighteen(id[18].working);
    setnineteen(id[19].working);
    settwenty(id[20].working);
    settwentyOne(id[21].working);
    settwentyTwo(id[22].working);
    settwentyThree(id[23].working);
    settwentyFour(id[0].working);
    allHours[10].working = id[10].working;
    allHours[11].working = id[11].working;
    allHours[12].working = id[12].working;
    allHours[13].working = id[13].working;
    allHours[14].working = id[14].working;
    allHours[15].working = id[15].working;
    allHours[16].working = id[16].working;
    allHours[17].working = id[17].working;
    allHours[18].working = id[18].working;
    allHours[19].working = id[19].working;
    allHours[20].working = id[20].working;
    allHours[21].working = id[21].working;
    allHours[22].working = id[22].working;
    allHours[23].working = id[23].working;
    allHours[0].working = id[0].working;
  }
  function test(id) {
    // setSelectedDate(date);
    // (newValue) => setSelectedDate(newValue);
    // console.log(selectedDate);
    // console.log(id);
    setSelectedDate(id.replaceAll("/", "-"));
    // id.replaceAll("/", "-")
    setmodalVisibility(false);
    // console.log(id);
    // console.log("ceav" + selectedDate);
    console.log(id.replaceAll("/", "-"));
    let a = new Date(id);
    let month = a.getUTCMonth() + 1;
    let day = a.getDate();
    let year = a.getFullYear();
    let requestDate = day + "-" + month + "-" + year;
    console.log(requestDate);
    getSchedulerForDriver(requestDate);
  }

  function setModalVisible() {
    setmodalVisibility(true);
  }

  function switchTen() {
    setTen((current) => !current);
    allHours[10].working = !ten;
  }
  function switeleven() {
    seteleven((current) => !current);
    allHours[11].working = eleven;
  }
  function switchtwelve() {
    setTwelve((current) => !current);
    allHours[12].working = twelve;
  }
  function switchthirteen() {
    setThirteen((current) => !current);
    allHours[13].working = thirteen;
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
    console.log("herer");
    settwentyFour((current) => !current);
    // setAllHours([
    //   { blocked: false, hour: 0, working: twentyFour },
    //   { blocked: false, hour: 1, working: false },
    //   { blocked: false, hour: 2, working: false },
    //   { blocked: false, hour: 3, working: false },
    //   { blocked: false, hour: 4, working: false },
    //   { blocked: false, hour: 5, working: false },
    //   { blocked: false, hour: 6, working: false },
    //   { blocked: false, hour: 7, working: false },
    //   { blocked: false, hour: 8, working: false },
    //   { blocked: false, hour: 9, working: false },
    //   { blocked: false, hour: 10, working: ten },
    //   { blocked: false, hour: 11, working: eleven },
    //   { blocked: false, hour: 12, working: twelve },
    //   { blocked: false, hour: 13, working: thirteen },
    //   { blocked: false, hour: 14, working: fourteen },
    //   { blocked: false, hour: 15, working: fifteen },
    //   { blocked: false, hour: 16, working: sixteen },
    //   { blocked: false, hour: 17, working: seventeen },
    //   { blocked: false, hour: 18, working: eighteen },
    //   { blocked: false, hour: 19, working: nineteen },
    //   { blocked: false, hour: 20, working: twenty },
    //   { blocked: false, hour: 21, working: twentyOne },
    //   { blocked: false, hour: 22, working: twentyTwo },
    //   { blocked: false, hour: 23, working: twentyThree },
    // ]);
  }
  function sendSchedule() {
    // console.log(allHours);
    let dateC = new Date(selectedDate);
    let month = dateC.getUTCMonth() + 1;
    let day = dateC.getDate();
    let year = dateC.getFullYear();
    let goodDate = day + "-" + month + "-" + year;
    createDriverSchedule(goodDate, allHours);
    console.log(allHours);
    console.log(allHours[10].working + " working");
    console.log(ten + " ten");
  }
  return (
    <View style={styles.inputContainerMain}>
      <Pressable onPress={setModalVisible}>
        <Text style={styles.heading}>Selectează data</Text>
      </Pressable>
      <Text>Data selectata: {selectedDate}</Text>
      {/* <Pressable onPress={sendSchedule}>
        <Text>Apasaa</Text>
      </Pressable> */}
      <Pressable onPress={sendSchedule} style={styles.presableButton2}>
        <Text style={styles.heading2}>Trimite program</Text>
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
  heading2: {
    fontSize: 16,
    color: "white",
  },
  presableButton2: {
    width: 160,
    backgroundColor: "orange",
    padding: 8,
    // alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 4,
    marginTop: 10,
  },
});
