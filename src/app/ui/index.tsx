import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainStack from "pages/MainStack/MainStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <MainStack />
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
