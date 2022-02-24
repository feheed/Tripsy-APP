import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateTrip from "../Trip/CreateTrip";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="new" component={CreateTrip} />
    </Navigator>
  );
};

export default StackNavigator;
