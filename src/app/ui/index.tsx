import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import { Provider, useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme as DefaultDarckTheme,
} from "@react-navigation/native";

import MainStack from "pages/MainStack/MainStack";
import { store } from "app/model";
import { selectCurentTheme } from "entities/Settings/model";
import { navigationRef } from "shared/lib/navigationRef";
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
  reactNavigationDark: DefaultDarckTheme,
});
const Wrapper = () => {
  const currentTheme = useSelector(selectCurentTheme);
  const { theme } = useMaterial3Theme();

  const paperTheme =
    currentTheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer
          ref={navigationRef}
          theme={currentTheme === "light" ? LightTheme : DarkTheme}
        >
          <MainStack />
        </NavigationContainer>
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper></Wrapper>
    </Provider>
  );
}
