import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { BrowseStack } from "../browse";
import { ProfileStack } from "../profile";
import { BottomTabsParamList } from "./types";
import { getTabBarIcon } from "./utils/tab-icons";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="Browse"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: getTabBarIcon(route),
    })}
  >
    <Tab.Screen name="Browse" component={BrowseStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);
