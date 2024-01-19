import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { Button, Text } from "shared/ui";

const SignInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">HeroStats</Text>
      <Text>Sign in</Text>
      <Text>Not a member?</Text>
      <Button onPress={() => navigate(SCREENS.SignUp)}>Join now</Button>
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
      <Button mode="contained">Join now</Button>
      <Button onPress={() => navigate(SCREENS.ForgotPassword)}>
        Forgot your password?
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignInScreen;
