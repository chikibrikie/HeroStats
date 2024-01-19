import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForgotPasswordScreen from "pages/Auth/ui/ForgotPasswordScreen";
import SignUpScreen from "pages/Auth/ui/SignUpScreen";
import SignInScreen from "pages/Auth/ui/SignInScreen";
import { navigationRef } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
        <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
        <Stack.Screen
          name={SCREENS.ForgotPassword}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
