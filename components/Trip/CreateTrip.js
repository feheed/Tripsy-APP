import tripStore from "../../stores/tripStore";
import React, { useState } from "react";
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
const CreateTrip = () => {
  const [trip, setTrip] = useState({
    name: "",
    image: "",
    country: "",
    discreption: "",
    duration: "",
    Rank: null,
    type: "",
  });
  const handlesubmit = () => {
    console.log(trip);
    tripStore.createTrip(trip);
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
        <TextInput
          style={styles.input}
          placeholder={"name"}
          onChangeText={(value) => setTrip({ ...trip, name: value })}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"country"}
          onChangeText={(value) => setTrip({ ...trip, country: value })}
          secureTextEntry={true}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Trip Picture"}
          onChangeText={(value) => setTrip({ ...trip, image: value })}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"discription"}
          onChangeText={(value) => setTrip({ ...trip, discreption: value })}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"duration"}
          onChangeText={(value) => setTrip({ ...trip, duration: value })}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"1-5 rating"}
          onChangeText={(value) => setTrip({ ...trip, Rank: value })}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={("Family", "Solo", "Freinds", "Couples", "For everyone")}
          onChangeText={(value) => setTrip({ ...trip, type: value })}
          placeholderTextColor={"rgba(255,255,255,07)"}
          underlineColorAndroid={"transparent"}
        />
      </View>

      <TouchableOpacity onPress={handlesubmit} style={styles.btnLogin}>
        <Text style={styles.text}>Add My Trip</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default observer(CreateTrip);

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
