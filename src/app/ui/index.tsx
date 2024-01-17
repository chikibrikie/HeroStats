import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";

import SingInScreen from "pages/Auth/ui/SingInScreen";

export default function App() {
  return (
    <PaperProvider>
      <SingInScreen></SingInScreen>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
