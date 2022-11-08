import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";

export default function Complaints(props) {
  const [orderCode, setOrderCode] = useState("Cod Comandă");
  const [complaints, setComplaints] = useState("Mențiuni");
  function sendComplain() {
    console.log(orderCode);
    console.log(complaints);
    //request trimitere dupa facut loadingScreen
  }
  function closeAndReset() {
    props.closeCompointsModal();
    setOrderCode("Cod Comandă");
    setComplaints("Mențiuni");
  }
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <View style={styles.title}>
          <Text style={styles.readyText}>Sesizări</Text>
        </View>
        <Text style={styles.readyText2}>Cod Comandă</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={setOrderCode}
          placeholderTextColor="#000"
          //   placeholder={orderCode}
        />
        <Text style={styles.readyText2}>Mențiuni</Text>
        <TextInput
          multiline
          maxHeight={180}
          style={styles.textInput2}
          onChangeText={setComplaints}
          placeholderTextColor="#000"
          //   placeholder={complaints}
        />
        <View style={styles.buttons}>
          <Pressable onPress={closeAndReset} style={styles.presableButton2}>
            <Text style={styles.presableText}>Inapoi</Text>
          </Pressable>
          <Pressable onPress={sendComplain} style={styles.presableButton}>
            <Text style={styles.presableText}>Trimite</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#06b4e0",
    backgroundColor: "white",
    width: "100%",
    marginRight: 8,
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  textInput2: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#06b4e0",
    backgroundColor: "white",
    width: "100%",
    height: 100,
    marginRight: 8,
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  readyText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    // alignItems: "center",
  },
  readyText2: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
    marginTop: 20,
  },
  presableButton: {
    backgroundColor: "orange",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginTop: 20,
    marginLeft: 20,
  },
  presableButton2: {
    backgroundColor: "red",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginTop: 20,
    marginRight: 20,
  },
  presableText: {
    color: "white",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
