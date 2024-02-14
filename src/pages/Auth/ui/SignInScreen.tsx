import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TFunction } from "i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import {
  Button,
  Text,
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
  useTheme,
  HelperText,
} from "shared/ui";
import { updateUser } from "entities/Authentication/model";
const getSchema = (t: TFunction) => {
  return z.object({
    email: z
      .string({ required_error: t("This field is requaired!") })
      .email({ message: t("Invalid email address") }),
    password: z
      .string({ required_error: t("This field is requaired!") })
      .min(8, { message: t("Must be n or fewer characters long", { n: 8 }) }),
  });
};
const SignInScreen = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(updateUser({ email: data.email }));
  });

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
        <Text variant="displayLarge" style={styles.title}>
          HeroStats
        </Text>
        <View>
          <Text variant="headlineLarge">{t("Sign in")}</Text>
          <View style={styles.row}>
            <Text>{t("Not a member?")}</Text>
            <Button onPress={() => navigate(SCREENS.SignUp)}>
              {t("Join now")}
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
        </View>
        <View>
          <Button mode="contained" onPress={onSubmit}>
            {t("Sign In")}
          </Button>
          <Button onPress={() => navigate(SCREENS.ForgotPassword)}>
            {t("Forgot your password?")}
          </Button>
        </View>
      </KeyboardAwareScrollView>
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
  scroll: {
    justifyContent: "space-between",
    flex: 1,
  },
});
export default SignInScreen;
