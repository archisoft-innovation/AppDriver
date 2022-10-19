import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../services/api/store/auth-context";
import ReportsItems from "../components/Reports/reportsItems";

export default function Rapoarte() {
  const infoToUpdate = useContext(AuthContext);
  const [context, setContext] = useState(infoToUpdate);
  function reportsBtn() {
    console.log("repots btn");
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.goalText}>Perioada anterioară de muncă</Text>
      <ScrollView>
        <ReportsItems />
        <ReportsItems />
      </ScrollView>
      <View style={styles.goalItem}>
        <Button title="Some btn" onPress={reportsBtn} />
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
  reportItem: {
    marginTop: 30,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },

  inputContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },

  presableBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
