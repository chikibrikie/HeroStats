import { StatusBar } from "expo-status-bar";
import React from "react";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

import MainStack from "pages/MainStack/MainStack";

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <MainStack />
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
