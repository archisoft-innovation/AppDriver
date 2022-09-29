import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Some() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>
        This is another page man, quite another page
      </Text>
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
