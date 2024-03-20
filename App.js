import { StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { appStyle } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center"}}>
        <ProfileCard/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
