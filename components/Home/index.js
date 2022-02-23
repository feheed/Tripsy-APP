//Icons
import Icon from "react-native-vector-icons/Ionicons";
import IconLock from "react-native-vector-icons/Feather";

// react native import
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import React from "react";
import { observer } from "mobx-react-lite";

const { width: WIDTH } = Dimensions.get("window");
const Home = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://media.idownloadblog.com/wp-content/uploads/2018/12/snow-winter-car-night-nature-iphone-X.jpg",
      }}
      style={styles.backgroundContainer}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://icon-library.com/images/google-location-icon/google-location-icon-17.jpg",
          }}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Tripsy</Text>
      </View>
      <View style={styles.logoContainer}>
        <Icon
          style={styles.inputIcon}
          name={"ios-person-outline"}
          size={28}
          color={"rgba(255,255,255,0.7)"}
        />
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View>
        <IconLock
          style={styles.inputIcon}
          name={"lock"}
          size={28}
          color={"rgba(255,255,255,0.7)"}
        />
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity style={styles.btnEye}>
          <Icon
            name={"ios-eye-outline"}
            size={26}
            color={"rgba(255,255,255,0.7)"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default observer(Home);
const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
    opacity: 0.5,
  },
  input: {
    width: WIDTH - 40,
    height: 40,
    borderRadius: 45,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 40,
    height: 40,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 20,
    textAlign: "center",
  },
});
