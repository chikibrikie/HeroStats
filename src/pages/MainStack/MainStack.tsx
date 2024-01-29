import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";

import TabScreen from "./TabStack";

import ForgotPasswordScreen from "pages/Auth/ui/ForgotPasswordScreen";
import SignUpScreen from "pages/Auth/ui/SignUpScreen";
import SignInScreen from "pages/Auth/ui/SignInScreen";
import SCREENS from "shared/lib/screen";
import SettingsScreen from "pages/Settings/ui/SettingsScreen";
import { navigate } from "shared/lib/navigationRef";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <IconButton
            icon={"cog"}
            onPress={() => navigate(SCREENS.Settings)}
          ></IconButton>
        ),
      }}
    >
      <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
      <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREENS.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
      <Stack.Screen name={SCREENS.Tab} component={TabScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;
