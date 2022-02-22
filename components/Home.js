import React from "react";

import { StyleSheet, Text, View } from "react-native";
import Signup from "./auth/Signup";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      {/* <Signin /> */}
      <Signup />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
