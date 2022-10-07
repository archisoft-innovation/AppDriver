import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Rapoarte() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>Rapoarte Page</Text>
      <Text style={styles.goalText}>Rapoarte Page</Text>
      <Text style={styles.goalText}>Rapoarte Page</Text>
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
