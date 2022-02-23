import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import React from "react";
import Signup from "./auth/Signup";

const Home = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://media.idownloadblog.com/wp-content/uploads/2018/12/snow-winter-car-night-nature-iphone-X.jpg",
      }}
      style={styles.background}
    >
      <Text>Home</Text>
      {/* <Signin /> */}
      <Signup />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
});
export default Home;
