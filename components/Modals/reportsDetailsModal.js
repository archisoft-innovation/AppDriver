import { StyleSheet, Modal, View, Image, Text, Pressable } from "react-native";

export default function RerpotsDetailsModal(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.goalText}>Istoric Comandă</Text>
            <View style={styles.viewDst}>
              <Text style={styles.goalText2}>Punct de ridicare</Text>
              <Text style={styles.goalText3}>{props.vendorAddress}</Text>
              <Text style={styles.goalText2}>Punct de livrare</Text>
              <Text style={styles.goalText3}>{props.deliveryAddress}</Text>
            </View>
            <View style={styles.viewDst}>
              <View style={styles.distanta}>
                <Text style={styles.goalText2}>Distanță</Text>
                <Text style={styles.goalText2}>{props.distance + " KM"}</Text>
              </View>
              <View style={styles.distanta}>
                <Text style={styles.goalText2}>Câștig</Text>
                <Text style={styles.goalText2}>
                  {props.deliveryManFee + " Ron"}
                </Text>
              </View>
              <View style={styles.distanta}>
                <Text style={styles.goalText2}>Valoare comandă</Text>
                <Text style={styles.goalText2}>
                  {props.totalPrice + " Ron"}
                </Text>
              </View>
            </View>
            <View style={styles.readySet}>
              <Image
                style={styles.image}
                source={require("../../assets/images/requestSent.png")}
              />
            </View>
            <Pressable onPress={props.xModal} style={styles.presableButton}>
              <Text style={styles.pressableText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 180,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#06b4e0",
  },

  goalText: {
    color: "white",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  goalText2: {
    color: "black",
    padding: 10,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
  },
  goalText3: {
    color: "black",
    textAlign: "left",
    fontSize: 16,
    marginLeft: 30,
  },
  image: {
    width: 220,
    height: 240,
    margin: 20,
  },
  readySet: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },

  readyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  shiftText: {
    fontSize: 20,
    marginLeft: 10,
  },
  shiftContainer: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  shiftBContainer: {
    alignItems: "center",
  },
  switchMrg: {
    marginRight: 10,
  },
  presableButton: {
    width: 100,
    backgroundColor: "orange",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 6,
    marginBottom: 8,
  },
  pressableText: {
    color: "white",
  },
  distanta: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewDst: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
