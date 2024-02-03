import React from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { TFunction } from "i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  useTheme,
  HelperText,
} from "shared/ui";

const getSchema = (t: TFunction) => {
  return z.object({
    email: z
      .string({ required_error: t("This field is requaired!") })
      .email({ message: t("Invalid email address") }),
  });
};

const SingInScreen = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title} variant="displayLarge">
          HeroStats
        </Text>
        <View>
          <Text variant="headlineLarge">{t("Forgot your password?")}</Text>
          <Text>{t("Don’t worry, it happens to the best of us.")}</Text>
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View>
                <TextInput
                  error={Boolean(error)}
                  label={t("Email or username")}
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
          <Button mode="contained" onPress={onSubmit}>
            {t("Send reset link")}
          </Button>
        </View>
        <Button onPress={() => navigate(SCREENS.SignIn)}>
          {t("Back to sign in")}
        </Button>
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
  input: {
    gap: 15,
  },
  scroll: {
    justifyContent: "space-between",
    flex: 1,
  },
});
export default SingInScreen;
