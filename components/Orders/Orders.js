import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Orders() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inLineText}>
        <Text style={styles.textPadding}>Smt Code</Text>
        <Text style={styles.textPadding}>De achitat la partener</Text>
      </View>
      <View style={styles.inLineText}>
        <Text style={styles.textPadding}>Data</Text>
        <Text style={styles.textPadding}>Suma 1250 Ron</Text>
      </View>
      <Text style={styles.textPadding}>Partener:</Text>
      <Text style={styles.textPadding}>Telefon</Text>
      <Text style={styles.textPadding}>Adresa</Text>
      <Text style={styles.textPadding}>Metoda de plata</Text>
      <Text style={styles.textPadding}>Valoare: Ron</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    // alignItems: "center",
    // textAlign: "center",
    // flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    height: 200,
  },
  inLineText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPadding: {
    padding: 10,
  },
});
