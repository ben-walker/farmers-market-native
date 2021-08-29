import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { BrowseStack } from "../browse";
import { ProfileStack } from "../profile";
import { BottomTabsParamList, TabBarIconMap } from "./types";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const tabBarIconMap: TabBarIconMap = {
  Browse: "albums",
  Profile: "person-circle",
};

export const BottomTabs = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="Browse"
    screenOptions={({ route }) => ({
      tabBarIcon: function icon({ color, size }) {
        const iconName = tabBarIconMap[route.name];
        return <Ionicons name={iconName} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="Browse" component={BrowseStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);
