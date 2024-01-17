import { View, StyleSheet } from "react-native";

import { Button, Text } from "shared/ui";

const SingInScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <Text>Open up App.tsx to start working on your app!</Text>
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
