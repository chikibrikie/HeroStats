import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, IconButton } from "react-native-paper";

import HomeBoard from "pages/Screens/ui/HomeBoard";
import SCREENS from "shared/lib/screen";
import MyProfileScreen from "pages/Screens/Profile";
import { navigate } from "shared/lib/navigationRef";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === SCREENS.HomeBoard) {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === SCREENS.MyProfile) {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }

          // You can return any component that you like here!
          return <Icon source={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={SCREENS.HomeBoard} component={HomeBoard} />
      <Tab.Screen
        name={SCREENS.MyProfile}
        component={MyProfileScreen}
        options={{
          headerRight: () => (
            <IconButton
              icon={"cog"}
              onPress={() => navigate(SCREENS.Settings)}
            ></IconButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
