import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "../Auth/SignUp";
import Home from "../Home";
import TripList from "../Trip/TripList";
import authStore from "../../stores/authStore";
import CreateTrip from "../Trip/CreateTrip";
import { observer } from "mobx-react";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return !authStore.user ? (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="SignIn" component={Home} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      initialRouteName="Trips"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen name="Trips" component={TripList} />
      <Tab.Screen name="new Trip" component={CreateTrip} />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);
