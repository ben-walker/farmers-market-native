import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";

import { BottomTabsParamList, BottomTabsRouteProp } from "../types";

type TabBarIconMap = {
  [key in keyof BottomTabsParamList]: keyof typeof Ionicons.glyphMap;
};

const tabBarIconMap: TabBarIconMap = {
  Browse: "albums",
  Profile: "person-circle",
};

export const getTabBarIcon = (
  route: BottomTabsRouteProp
): BottomTabNavigationOptions["tabBarIcon"] =>
  function icon({ color, size }) {
    const iconName = tabBarIconMap[route.name];
    return <Ionicons name={iconName} color={color} size={size} />;
  };
