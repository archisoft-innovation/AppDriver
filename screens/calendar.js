import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Calendar() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>Calendar Page</Text>
      <Text style={styles.goalText}>Calendar Page</Text>
      <Text style={styles.goalText}>Calendar Page</Text>
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
});
