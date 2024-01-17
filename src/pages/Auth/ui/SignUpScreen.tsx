import { View, StyleSheet } from "react-native";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { Button, Text } from "shared/ui";

const SingInScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon="camera"
        mode="contained"
        onPress={() => navigate(SCREENS.SignUp)}
      >
        Press me
      </Button>
      <Text>SignIn</Text>
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
  button: {},
});
export default SingInScreen;
