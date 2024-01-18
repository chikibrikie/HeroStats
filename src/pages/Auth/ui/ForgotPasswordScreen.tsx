import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { Button, Text } from "shared/ui";

const SingInScreen = () => {
  const [textForgotEmail, setTextForgotEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>HeroStats</Text>
      <Text>Forgot your password?</Text>
      <Text>Don’t worry, it happens to the best of us.</Text>
      <TextInput
        label="Email or username"
        value={textForgotEmail}
        onChangeText={(text) => setTextForgotEmail(text)}
      />
      <Button mode="contained">Send reset link</Button>
      <Button onPress={() => navigate(SCREENS.SignIn)}>Back to sign in</Button>
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
export default SingInScreen;
