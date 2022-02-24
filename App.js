import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./components/Navigation/BottomTab";
import NavBar from "./components/Navigation/NavBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavBar />
        <BottomTab />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
