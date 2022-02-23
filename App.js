import { NativeBaseProvider } from "native-base";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import TripList from "./components/Trip/TripList";
// import TripList from "./components/Trip/TripList";
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
