import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Calendar() {
  return (
    <View style={styles.inputContainer}>
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
