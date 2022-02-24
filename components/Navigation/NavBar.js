import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon2 from "react-native-vector-icons/Entypo";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  return authStore.user ? (
    <View style={styles.container}>
      <TouchableOpacity onPress={authStore.logout}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://icon-library.com/images/google-location-icon/google-location-icon-17.jpg",
          }}
        />
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("new")}>
          <Icon2
            style={styles.inputIcon}
            name={"squared-plus"}
            size={30}
            color={"rgba(255,255,255,0.7)"}
          />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <></>
  );
};

export default observer(NavBar);

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
  },
  containerIcon: {
    flexDirection: "row",
  },
  inputIcon: { color: "black" },
});
