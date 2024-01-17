import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "pages/MainStack/MainStack";
import { navigationRef } from "shared/lib/navigationRef";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer
        onReady={() => {
          console.log("ready");
        }}
        ref={navigationRef}
      >
        <MainStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
