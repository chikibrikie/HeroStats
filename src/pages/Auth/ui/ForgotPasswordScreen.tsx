import React from "react";

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
} from "shared/ui";
const SingInScreen = () => {
  const theme = useTheme();
  const [textForgotEmail, setTextForgotEmail] = React.useState("");
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={styles.title} variant="displayLarge">
        HeroStats
      </Text>
      <View>
        <Text variant="headlineLarge">Forgot your password?</Text>
        <Text>Don’t worry, it happens to the best of us.</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          label="Email or username"
          value={textForgotEmail}
          onChangeText={(text) => setTextForgotEmail(text)}
        />
        <Button mode="contained">Send reset link</Button>
      </View>
      <Button onPress={() => navigate(SCREENS.SignIn)}>Back to sign in</Button>
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
});
export default SingInScreen;
