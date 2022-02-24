import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/StackNavigator";
import BottomTab from "./components/Navigation/BottomTab";
import NavBar from "./components/Navigation/NavBar";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <NavBar />
        <BottomTab />
        {/* <StackNavigator /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
