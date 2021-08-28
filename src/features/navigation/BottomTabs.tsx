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
  <Tab.Navigator initialRouteName="Browse">
    <Tab.Screen name="Browse" component={Browse} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
