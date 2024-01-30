import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeBoard from "pages/Screens/ui/HomeBoard";
import SCREENS from "shared/lib/screen";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREENS.HomeBoard} component={HomeBoard} />
    </Tab.Navigator>
  );
}
