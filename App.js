import { NativeBaseProvider } from "native-base";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <Home />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
