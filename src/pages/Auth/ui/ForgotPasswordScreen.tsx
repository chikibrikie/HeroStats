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
} from "shared/ui";
const SingInScreen = () => {
  const [textForgotEmail, setTextForgotEmail] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">HeroStats</Text>
      <View>
        <Text>Forgot your password?</Text>
        <Text>Don’t worry, it happens to the best of us.</Text>
      </View>
      <TextInput
        label="Email or username"
        value={textForgotEmail}
        onChangeText={(text) => setTextForgotEmail(text)}
      />
      <Button mode="contained">Send reset link</Button>
      <Button onPress={() => navigate(SCREENS.SignIn)}>Back to sign in</Button>
    </SafeAreaView>
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
