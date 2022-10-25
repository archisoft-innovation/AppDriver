import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";

export default function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/loadingOverlay.png")}
      />
      <ActivityIndicator size="large" />
    </View>
  );
}

// export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: "#06c8f9",
  },
  message: {
    fontSize: 26,
    marginBottom: 12,
    color: "white",
  },
  image: {
    width: 300,
    height: 180,
    margin: 40,
  },
});
