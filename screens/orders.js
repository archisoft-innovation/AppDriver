import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import Orders from "../components/Orders/Orders";

export default function Comenzi() {
  return (
    <View style={styles.inputContainer}>
      {/* <View style={styles.goalItem}> */}
      <View style={styles.shiftContainer}>
        <Text style={styles.goalText}>Câștiguri zilnice</Text>
        <Text style={styles.goalText}>{"Suma"} Ron</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewPad}
      >
        <Orders />
        <Orders />
        <Orders />
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
