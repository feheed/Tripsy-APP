import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react-lite";

const TripList = () => {
  const tripitems = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} />
  ));
  console.log(tripitems);
  return <View style={styles.tripDetailWrapper}>{tripitems}</View>;
};

export default observer(TripList);

const styles = StyleSheet.create({
  tripDetailWrapper: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "beige",
    display: "flex",
    flexWrap: "wrap",
  },
});
