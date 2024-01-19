import React from "react";

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
} from "shared/ui";

const SingInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  const [textConfirmPassword, setConfirmPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">HeroStats</Text>
      <View>
        <Text>Join</Text>
        <Text>Already a member?</Text>
        <Button onPress={() => navigate(SCREENS.SignIn)}>Sign in</Button>
      </View>
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
      <TextInput
        label="Confirm password"
        value={textConfirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>
        Yes, I want emails with recommendations, special offers and more.
      </Text>
      <Button mode="contained">Join now</Button>
      <Text>
        By joining HeroStats, you accept our Membership agreement, Privacy
        Policy and Terms of Use.
      </Text>
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
