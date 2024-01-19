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
      <View>
        <Text style={styles.title} variant="displayLarge">
          HeroStats
        </Text>
        <Text variant="headlineLarge">Join</Text>
        <View style={styles.row}>
          <Text>Already a member?</Text>
          <Button onPress={() => navigate(SCREENS.SignIn)}>Sign in</Button>
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
        <TextInput
          label="Confirm password"
          value={textConfirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxText}>
          Yes, I want emails with recommendations, special offers and more.
        </Text>
      </View>
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
  checkbox: {
    flexDirection: "row",
  },
  checkboxText: {
    flex: 1,
  },
});
export default SingInScreen;
