import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { TFunction } from "i18next";

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
  HelperText,
} from "shared/ui";

const getSchema = (t: TFunction) => {
  return z.object({
    email: z
      .string({ required_error: t("This field is requaired!") })
      .email({ message: t("Invalid email address") }),
    password: z
      .string({ required_error: t("This field is requaired!") })
      .min(8, { message: t("Must be n or fewer characters long", { n: 8 }) }),
    confirmPassword: z
      .string({ required_error: t("This field is requaired!") })
      .min(8, { message: t("Must be n or fewer characters long", { n: 8 }) }),
  });
};

const SingUpScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate(SCREENS.Tab);
  });
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
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                error={Boolean(error)}
                label={t("Email")}
                value={value}
                onChangeText={onChange}
              />
              <HelperText type="error" visible={Boolean(error)}>
                {error?.message}
              </HelperText>
            </View>
          )}
          name="email"
        />

        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                error={Boolean(error)}
                label={t("Password")}
                value={value}
                onChangeText={onChange}
              />
              <HelperText type="error" visible={Boolean(error)}>
                {error?.message}
              </HelperText>
            </View>
          )}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                error={Boolean(error)}
                label={t("Confirm password")}
                value={value}
                onChangeText={onChange}
              />
              <HelperText type="error" visible={Boolean(error)}>
                {error?.message}
              </HelperText>
            </View>
          )}
          name="confirmPassword"
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
      <Button mode="contained" onPress={onSubmit}>
        {t("Join Now")}
      </Button>
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
export default SingUpScreen;
