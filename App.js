import { StyleSheet, Text, View } from "react-native";
import { Profil } from "./components/Profile/Profil";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { appStyle } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={appStyle.box1} />
        <View style={appStyle.box2} />
        <View style={appStyle.box3} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
