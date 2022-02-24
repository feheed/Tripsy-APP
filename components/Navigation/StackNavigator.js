import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import SignUp from "../Auth/SignUp";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="SignUp">
      <Screen name="Home" component={Home} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default StackNavigator;
