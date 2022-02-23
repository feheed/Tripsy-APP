//Icons
import React, { useState } from "react";
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

import { observer } from "mobx-react-lite";
import authStore from "../../stores/authStore";

const { width: WIDTH } = Dimensions.get("window");
const Home = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handlesubmit = () => {
    console.log(user);
    authStore.signIn(user);
    // \\call sign in functioon from auth store
  };
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
          onChangeText={(value) => setUser({ ...user, username: value })}
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
          onChangeText={(value) => setUser({ ...user, password: value })}
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
      <TouchableOpacity onPress={handlesubmit} style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      {authStore.user ? <Text>helloo</Text> : <Text>byeeeeeeeee</Text>}
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
