import {
  StyleSheet,
  Modal,
  View,
  Image,
  Text,
  Pressable,
  Switch,
} from "react-native";
import React, { useState } from "react";

export default function ShiftCall(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.goalText}>
              Ca urmare că nu ești online, nu putem sa îți atribuim comenzi :-(
            </Text>
            <Text style={styles.goalText}>
              Solicitarea ta a fost trimisă către dispecerat urmând să fie
              procesată
            </Text>
            {/* <View style={styles.shiftBContainer}>
              <View style={styles.shiftContainer}>
                <Text style={styles.shiftText}>Intră în tură</Text>
                <Switch
                  style={styles.switchMrg}
                  trackColor={{ false: "white", true: "orange" }}
                  thumbColor={isEnabled ? "green" : "white"}
                  ios_backgroundColor="red"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View> */}

            <View style={styles.readySet}>
              <Image
                style={styles.image}
                source={require("../assets/images/shiftIn.png")}
              />
              <View>
                <Text style={styles.readyText}>Ready, Set</Text>
                <Text style={styles.readyText}>Smartioo</Text>
              </View>
            </View>
            <Pressable
              onPress={props.shiftInAcknowledged}
              style={styles.presableButton}
            >
              <Text style={styles.pressableText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 180,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },

  goalText: {
    color: "white",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 220,
    height: 240,
    margin: 20,
  },
  readySet: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },

  readyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  shiftText: {
    fontSize: 20,
    marginLeft: 10,
  },
  shiftContainer: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  shiftBContainer: {
    alignItems: "center",
  },
  switchMrg: {
    marginRight: 10,
  },
  presableButton: {
    width: 100,
    backgroundColor: "orange",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 6,
    marginBottom: 8,
  },
  pressableText: {
    color: "white",
  },
});
