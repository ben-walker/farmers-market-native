import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Browse } from "../browse";
import { Profile } from "../profile";

export type BottomTabsParamList = {
  Browse: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="Browse"
    screenOptions={({ route }) => ({
      tabBarIcon: function icon({ color, size }) {
        let iconName: keyof typeof Ionicons.glyphMap;

        switch (route.name) {
          case "Browse":
            iconName = "albums";
            break;

          case "Profile":
            iconName = "person-circle";
            break;
        }

        return <Ionicons name={iconName} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="Browse" component={Browse} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
