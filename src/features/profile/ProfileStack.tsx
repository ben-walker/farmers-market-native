import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { ProfileOverview } from "./ProfileOverview";
import { ProfileStackParamList } from "./types";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStack: React.FC = () => (
  <Stack.Navigator initialRouteName="ProfileOverview">
    <Stack.Screen
      name="ProfileOverview"
      component={ProfileOverview}
      options={{ title: "Profile" }}
    />
  </Stack.Navigator>
);
