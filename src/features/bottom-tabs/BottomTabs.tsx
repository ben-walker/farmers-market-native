import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { BrowseStack } from "../browse";
import { ProfileStack } from "../profile";
import { BottomTabsParamList } from "./types";
import { getTabBarIcon } from "./utils/tab-icons";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs: React.FC = () => (
  <Tab.Navigator
    initialRouteName="BrowseStack"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: getTabBarIcon(route),
    })}
  >
    <Tab.Screen
      name="BrowseStack"
      options={{ title: "Browse" }}
      component={BrowseStack}
    />
    <Tab.Screen
      name="ProfileStack"
      options={{ title: "Profile" }}
      component={ProfileStack}
    />
  </Tab.Navigator>
);
