import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { ShopFeedScreen } from "./ShopFeedScreen";
import { ShopScreen } from "./ShopScreen";
import { BrowseStackParamList } from "./types";

const Stack = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseStack: React.FC = () => (
  <Stack.Navigator initialRouteName="ShopFeed">
    <Stack.Screen
      name="ShopFeed"
      component={ShopFeedScreen}
      options={{ title: "Local Shops" }}
    />
    <Stack.Screen name="Shop" component={ShopScreen} />
  </Stack.Navigator>
);
