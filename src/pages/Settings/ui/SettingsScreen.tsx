import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  ILanguage,
  changeTheme,
  selectCurentTheme,
  selectCurrentLanguage,
  setCurrentLanguage,
} from "entities/Settings/model";
import {
  StyleSheet,
  SafeAreaView,
  useTheme,
  Text,
  Switch,
  View,
  RadioButton,
  Button,
} from "shared/ui";
import { selectUser, updateUser } from "entities/Authentication/model";
import { pop } from "shared/lib/navigationRef";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const currentTheme = useSelector(selectCurentTheme);

  const currentLanguage = useSelector(selectCurrentLanguage);

  const { t, i18n } = useTranslation();

  const onToggleSwitch = () => {
    dispatch(changeTheme(currentTheme === "dark" ? "light" : "dark"));
  };

  const onLanguageChange = (kekw: string) => {
    i18n.changeLanguage(kekw);
    dispatch(setCurrentLanguage(kekw as ILanguage));
  };
  const onPress = () => {
    dispatch(updateUser(null));
    pop();
  };

  const user = useSelector(selectUser);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.switch}>
        <Text>{t("Change theme")}</Text>
        <Switch
          value={currentTheme === "dark"}
          onValueChange={onToggleSwitch}
        />
      </View>
      <RadioButton.Group
        onValueChange={onLanguageChange}
        value={currentLanguage}
      >
        <View>
          <Text>{t("English")}</Text>
          <RadioButton value="en" />
        </View>
        <View>
          <Text>{t("Russian")}</Text>
          <RadioButton value="ru" />
        </View>
      </RadioButton.Group>
      {user === null ? null : (
        <Button mode="contained" onPress={onPress}>
          {t("Exit the application")}
        </Button>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default SettingsScreen;
