import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeTheme, selectCurentTheme } from "entities/Settings/model";
import {
  StyleSheet,
  SafeAreaView,
  useTheme,
  Text,
  Switch,
  View,
} from "shared/ui";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const currentTheme = useSelector(selectCurentTheme);

  const onToggleSwitch = () => {
    dispatch(changeTheme(currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.switch}>
        <Switch
          value={currentTheme === "dark"}
          onValueChange={onToggleSwitch}
        />
        <Text>{currentTheme}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default SettingsScreen;
