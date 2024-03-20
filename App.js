import { StyleSheet, Text, View } from "react-native";
import { Profil } from "./components/Profile/Profil";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { wordStyle } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
        <View style={{ backgroundColor: "blue", flex: 1 }} />
        <View style={{ backgroundColor: "green", flex: 2 }} />
        <View style={{ backgroundColor: "black", flex: 2 }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
