import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "./screens/calendar";
import Rapoarte from "./screens/reports";
import Comenzi from "./screens/orders";
import Profil from "./screens/profile";
import { Ionicons } from "@expo/vector-icons";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState, useContext, useEffect } from "react";
import ShiftCall from "./screens/shiftCall";
import ShiftCallOut from "./screens/shifltCallOut";
import { AuthContext } from "./services/api/store/auth-context";
import { shiftIn2, shiftRequestStatus } from "./services/api/shiftService";
// import { shiftIn } from "./services/api/shiftService";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";
import { UserData } from "./services/api/secureStorageConstants";

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME";
let foregroundSubscription = null;
// Define the background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    // Extract location coordinates from data
    console.log("in data");
    const { locations } = data;
    const location = locations[0];
    if (location) {
      console.log("Location in background", location.coords);
    }
  }
});
const BottomTab = createBottomTabNavigator();
async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}

Notifications.setNotificationHandler({
  handleNotification: async (notif) => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

export default function LoggedIn() {
  async function toBePass() {
    let shifts = "He is in shift";
    // await SecureStore.setItemAsync(UserData.isInShift, JSON.stringify(shifts));
    console.log(shifts);
  }
  useEffect(() => {
    fetchData();
    requestPermissionsAsync();
    const requestPermissions = async () => {
      // await DoLoghin("demo@driver.com", "parola");
      const foreground = await Location.requestForegroundPermissionsAsync();
      // startForegroundUpdate();
      if (foreground.granted)
        await Location.requestBackgroundPermissionsAsync();
    };
    requestPermissions();
  }, []);
  const fetchData = async () => {
    const result = await SecureStore.getItemAsync(UserData);
    if (result) {
      let a = JSON.parse(result);
      console.log(a);
      // a.ShiftStatus = "Here will be shiftStatus";
      setShiftInRequestAnswer(a.shiftStat);
      await SecureStore.setItemAsync(UserData, JSON.stringify(a));
    } else {
      console.log("No result passed");
    }
  };
  function notificationsCall() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Raspuns cerere",
        body: "Ai fost aprobat",
        sound: "./success.wav",
      },
      trigger: {
        seconds: 1,
      },
    });
  }
  // Start location tracking in foreground
  const startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }

    // Make sure that foreground location tracking is not running
    foregroundSubscription?.remove();

    // Start watching position in real-time
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (location) => {
        setPosition(location.coords);
      }
    );
    console.log(position);
  };

  // Stop location tracking in foreground
  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove();
    setPosition(null);
  };

  // Start location tracking in background
  const startBackgroundUpdate = async () => {
    // Don't track position if permission is not granted
    const { granted } = await Location.getBackgroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }

    // Make sure the task is defined otherwise do not start tracking
    const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
    if (!isTaskDefined) {
      console.log("Task is not defined");
      return;
    }

    // Don't track if it is already running in background
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TASK_NAME
    );
    if (hasStarted) {
      console.log("Already started");
      return;
    }

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      // For better logs, we set the accuracy to the most sensitive option
      accuracy: Location.Accuracy.BestForNavigation,
      // Make sure to enable this notification if you want to consistently track in the background
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: "Location",
        notificationBody: "Location tracking in background",
        notificationColor: "#fff",
      },
    });
  };

  // Stop location tracking in background
  const stopBackgroundUpdate = async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TASK_NAME
    );
    if (hasStarted) {
      await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
      console.log("Location tacking stopped");
    }
  };
  const [position, setPosition] = useState(null);
  const [modalShiftIn, setModalShiftIn] = useState(false);
  const [modalShiftOut, setModalShiftOut] = useState(false);
  const [checkShiftInStatus, setCheckShiftInStatus] = useState(false);
  const [shift, setShift] = useState(false);
  const [shiftOutBtn, setShiftOutBtn] = useState(false);
  const [shiftStatus, setShiftStatus] = useState("");
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
      // aici am functia de start foreGround + start background
      //startBackgroundUpdate()
      // startForegroundUpdate();
      // set notification to approve
      setShiftInRequestAnswer("Accepted");
      setShiftOutBtn(true);
      console.log("request in approved");
      //mai jos notificarea, trebuie facuta doar sa arate ce trebuie :-D sunet etc
      // notificationsCall();
      // mai trebuie sa pun shiftOut sa se vada
    } else if (requestStatus.isRejected) {
      // aici o sa vina stop tracking
      // set notification to Rejected
      setShiftInRequestAnswer("Denied");
      console.log("request in rejected");
    } else {
      // set notification to waitting
      setShiftInRequestAnswer("Waitting");
      console.log("in set Timeout all false");
      // console.log(requestStatus);
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
  // return (
  //   <View style={styles.container}>
  //     <Text>Longitude: {position?.longitude}</Text>
  //     <Text>Latitude: {position?.latitude}</Text>
  //     <View style={styles.separator} />
  //     <Button
  //       onPress={startForegroundUpdate}
  //       title="Start in foreground"
  //       color="green"
  //     />
  //     <View style={styles.separator} />
  //     <Button
  //       onPress={stopForegroundUpdate}
  //       title="Stop in foreground"
  //       color="red"
  //     />
  //     <View style={styles.separator} />
  //     <Button
  //       onPress={startBackgroundUpdate}
  //       title="Start in background"
  //       color="green"
  //     />
  //     <View style={styles.separator} />
  //     <Button
  //       onPress={stopBackgroundUpdate}
  //       title="Stop in foreground"
  //       color="red"
  //     />
  //   </View>
  // );
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
