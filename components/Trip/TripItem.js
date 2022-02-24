import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";
import Icon from "react-native-vector-icons/Entypo";
const TripItem = ({ trip }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tripDetailTitle}>{trip.name}</Text>
      <Text>
        <Icon
          name={"location-pin"}
          size={30}
          color={"rgba(255,255,255,0.7)"}
          style={styles.inputIcon}
        />
        {trip.country}
      </Text>
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
    width: "100%",
    height: 750,
    alignItems: "center",
    textAlign: "center",
  },
  tripDetailImage: {
    width: "100%",
    height: 500,
  },
  tripDetailTitle: {
    fontWeight: "bold",
    fontSize: 20,
    height: "3%",
    textTransform: "uppercase",
  },
  inputIcon: { color: "black" },
});
