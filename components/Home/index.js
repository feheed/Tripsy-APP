import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import React from "react";
const Home = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://media.idownloadblog.com/wp-content/uploads/2018/12/snow-winter-car-night-nature-iphone-X.jpg",
      }}
      style={styles.background}
    >
      <Text>hello</Text>
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
