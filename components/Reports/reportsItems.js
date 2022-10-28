import { StyleSheet, Text, Pressable, View } from "react-native";

export default function ReportsItems() {
  return (
    <View style={styles.viewSt}>
      <Pressable style={styles.presableBtn}>
        <Text>22 Aug - 28 Aug</Text>
        <Text>250 Ron</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  presableBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewSt: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
