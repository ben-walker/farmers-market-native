import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { ShopFeed } from "./ShopFeed";
import { BrowseStackParamList } from "./types";

const Stack = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseStack = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen name="ShopFeed" component={ShopFeed} />
  </Stack.Navigator>
);
