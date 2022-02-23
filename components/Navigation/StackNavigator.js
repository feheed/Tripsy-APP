import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default StackNavigator;
