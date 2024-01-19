import React from "react";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import {
  Button,
  Text,
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
} from "shared/ui";

const SignInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge" style={styles.title}>
        HeroStats
      </Text>
      <View>
        <Text variant="headlineLarge">Sign in</Text>
        <View style={styles.row}>
          <Text>Not a member?</Text>
          <Button onPress={() => navigate(SCREENS.SignUp)}>Join now</Button>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          label="Email"
          value={textEmail}
          onChangeText={(text) => setTextEmail(text)}
        />
        <TextInput
          label="Password"
          value={textPassword}
          onChangeText={(text) => setTextPassword(text)}
        />
      </View>
      <Button mode="contained">Sign In</Button>
      <Button onPress={() => navigate(SCREENS.ForgotPassword)}>
        Forgot your password?
      </Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
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
});
export default SignInScreen;
