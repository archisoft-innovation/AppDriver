import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "./screens/calendar";
import Rapoarte from "./screens/reports";
import Comenzi from "./screens/orders";
import Profil from "./screens/profile";
import { Ionicons } from "@expo/vector-icons";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState, useContext } from "react";
import ShiftCall from "./screens/shiftCall";
import ShiftCallOut from "./screens/shifltCallOut";
import { AuthContext } from "./services/api/store/auth-context";
import { shiftIn2, shiftRequestStatus } from "./services/api/shiftService";
// import { shiftIn } from "./services/api/shiftService";

const BottomTab = createBottomTabNavigator();

export default function LoggedIn() {
  const [modalShiftIn, setModalShiftIn] = useState(false);
  const [modalShiftOut, setModalShiftOut] = useState(false);
  const [checkShiftInStatus, setCheckShiftInStatus] = useState(false);
  const [shift, setShift] = useState(false);
  const [shiftOutBtn, setShiftOutBtn] = useState(false);
  // const [requestedInShift, setRequestedInShift] = useState(false);
  const [requestedOutShift, setRequestedOutShift] = useState(false);
  const info = useContext(AuthContext);
  // refacere shift states
  const [shiftInRequestAnswer, setShiftInRequestAnswer] = useState("noRequest");
  function shiftIn() {
    setModalShiftIn(true);
  }
  function shiftOut() {
    setModalShiftIn(false);
  }

  async function requestInShift() {
    setModalShiftIn(true);
    setShift(true);
    // setRequestedInShift(true);
    // mai jost am shift inu request
    shiftIn2(info.token);
    setCheckShiftInStatus(true);
    // console.log(info.token);
    // setCheckShiftInStatus(true);
    // mai sus, setTestInterval se apeleaza dupa ce face request de shift in si asteapta raspuns. cumva sa vad sa ii ascund butonu de shift in dupa ce e facut requestul
  }
  if (!checkShiftInStatus) {
    console.log("Shift status is false");
  } else {
    // mai jost am shift Request Status
    console.log("in else check shiftInStatus");
    // setTimeout(getStatus, 6000);
    getStatus();
  }
  async function getStatus() {
    // console.log("in get status");
    let requestStatus = await shiftRequestStatus(info.token);
    if (requestStatus.isApproved) {
      // set notification to approve
      setShiftInRequestAnswer("Accepted");
      setShiftOutBtn(true);
      console.log("request in approved");
      // mai trebuie sa pun shiftOut sa se vada
    } else if (requestStatus.isRejected) {
      // set notification to Rejected
      setShiftInRequestAnswer("Denied");
      console.log("request in rejected");
    } else {
      // set notification to waitting
      setShiftInRequestAnswer("Waitting");
      console.log("in set Timeout all false");
      setTimeout(getStatus, 30000);
    }
  }

  function requestInShiftModalClose() {
    // alert("request intrare in tura");
    setModalShiftIn(false);
  }
  function requestOutShift() {
    setModalShiftOut(true);
    setShift(false);
    // alert("request iesire in tura");
  }
  function requestOutShiftModalClose() {
    // alert("request intrare in tura");
    setModalShiftOut(false);
  }

  return (
    <NavigationContainer independent={true}>
      <ShiftCall
        visible={modalShiftIn}
        shiftInAcknowledged={requestInShiftModalClose}
      />
      <ShiftCallOut
        visible={modalShiftOut}
        shiftOutAcknowledged={requestOutShiftModalClose}
      />
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
          },
          headerRight: function test() {
            if (shiftOutBtn) {
              return (
                <View style={styles.shiftAll}>
                  <Pressable style={styles.shift} onPress={requestOutShift}>
                    <Ionicons name="radio-button-on" color="red" size="20" />
                    <Text style={styles.headerRightText}>Iesi din tura</Text>
                  </Pressable>
                </View>
              );
            }
          },
          headerLeft: function test() {
            if (!shift && shiftInRequestAnswer === "noRequest") {
              return (
                <View style={styles.shiftAll}>
                  <Pressable style={styles.shift} onPress={requestInShift}>
                    <Ionicons name="radio-button-on" color="green" size="20" />
                    <Text style={styles.headerRightText}>Intra in tura</Text>
                  </Pressable>
                </View>
              );
            } else if (shiftInRequestAnswer === "Waitting") {
              return (
                <View style={styles.shiftAll}>
                  {/* <Pressable style={styles.shift} onPress={requestInShift}> */}
                  {/* <Ionicons name="radio-button-on" color="green" size="20" /> */}
                  <Text style={styles.headerRightText}>Procesare tura</Text>
                  {/* </Pressable> */}
                </View>
              );
            } else if (shiftInRequestAnswer === "Accepted") {
              return (
                <View style={styles.shiftAll}>
                  {/* <Pressable style={styles.shift} onPress={requestInShift}> */}
                  {/* <Ionicons name="radio-button-on" color="green" size="20" /> */}
                  <Text style={styles.headerRightText}>In tura</Text>
                  {/* </Pressable> */}
                </View>
              );
            } else if (shiftInRequestAnswer === "Denied") {
              return (
                <View style={styles.shiftAll}>
                  <Pressable style={styles.shift} onPress={requestInShift}>
                    <Ionicons name="radio-button-on" color="green" size="20" />
                    <Text style={styles.headerRightText}>Intra in tura</Text>
                  </Pressable>
                </View>
              );
            }
          },
        }}
      >
        <BottomTab.Screen
          name="Comenzi"
          component={Comenzi}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color="white" size="24" />
            ),
            // headerShown: false,
          }}
          screenOptions={{ headerShown: false }}
        />
        <BottomTab.Screen
          name="Rapoarte"
          component={Rapoarte}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart" color="white" size="24" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color="white" size="24" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profil"
          component={Profil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="man" color="white" size="24" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  appContainer2: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  headerRightText: {
    color: "white",
    fontSize: 18,
  },
  shift: {
    flexDirection: "row",
  },
  shiftAll: {
    // backgroundColor: "#06b4e0",
    // backgroundColor: "#06b4e0",
    // borderColor: "#06b4e0",
    padding: 2,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
  },
});
