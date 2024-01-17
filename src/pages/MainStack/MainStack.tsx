import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForgotPasswordScreen from "pages/Auth/ui/ForgotPasswordScreen";
import SignUpScreen from "pages/Auth/ui/SignUpScreen";
import SingInScreen from "pages/Auth/ui/SingInScreen";
import { navigationRef } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.SignIn} component={SingInScreen} />
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
