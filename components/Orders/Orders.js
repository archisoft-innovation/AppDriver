import { StyleSheet, View, Text, Pressable } from "react-native";
import { Button } from "react-native-web";

export default function Orders() {
  function acceptOrder() {
    console.log("presabble text pressed");
  }
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
      <Pressable onPress={acceptOrder} style={styles.presableButton}>
        <Text style={styles.pressableText}>Acceptare comandă</Text>
      </Pressable>
      {/* <Button title="sa" /> */}
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
  },
  inLineText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPadding: {
    padding: 10,
  },
  presableButton: {
    width: 200,
    backgroundColor: "#06b4e0",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#06b4e0",
    borderRadius: 6,
    marginBottom: 8,
  },
  pressableText: {
    color: "white",
  },
});
