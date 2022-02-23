import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";
const TripItem = ({ trip }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tripDetailTitle}>{trip.name}</Text>
      <Image
        style={styles.tripDetailImage}
        source={{ uri: baseURL + trip.image }}
      />
      <Text></Text>
    </View>
  );
};
export default TripItem;
const styles = StyleSheet.create({
  container: {
    borderColor: "transparent",
    borderWidth: 3,
    width: "50%",
    height: 350,
    alignItems: "center",
    textAlign: "center",
  },
  tripDetailImage: {
    width: "80%",
    height: 150,
  },
  tripDetailTitle: {
    fontWeight: "bold",
    fontSize: 20,
    height: "15%",
    textTransform: "uppercase",
  },
});
