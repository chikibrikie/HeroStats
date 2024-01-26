import React from "react";
import { useTranslation } from "react-i18next";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Checkbox,
  SafeAreaView,
  useTheme,
  TouchableOpacity,
} from "shared/ui";

const SingInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  const [textConfirmPassword, setConfirmPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={styles.title} variant="displayLarge">
        HeroStats
      </Text>
      <View>
        <Text variant="headlineLarge">{t("Join")}</Text>
        <View style={styles.row}>
          <Text>{t("Already a member?")}</Text>
          <Button onPress={() => navigate(SCREENS.SignIn)}>
            {t("Sign in")}
          </Button>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          label={t("Email")}
          value={textEmail}
          onChangeText={(text) => setTextEmail(text)}
        />
        <TextInput
          label={t("Password")}
          value={textPassword}
          onChangeText={(text) => setTextPassword(text)}
        />
        <TextInput
          label={t("Confirm password")}
          value={textConfirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => {
          setChecked(!checked);
        }}
      >
        <Checkbox status={checked ? "checked" : "unchecked"} />
        <Text style={styles.checkboxText}>
          {t(
            "Yes, I want emails with recommendations, special offers and more.",
          )}
        </Text>
      </TouchableOpacity>
      <Button mode="contained">{t("Join Now")}</Button>
      <Text style={styles.footerText}>
        {t(
          "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.",
        )}
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    gap: 15,
  },
  checkbox: {
    flexDirection: "row",
  },
  checkboxText: {
    flex: 1,
  },
  footerText: {
    textAlign: "center",
  },
});
export default SingInScreen;
