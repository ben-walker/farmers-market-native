import { RouteProp } from "@react-navigation/native";

export type BottomTabsParamList = {
  BrowseStack: undefined;
  ProfileStack: undefined;
};

export type BottomTabsRouteProp = RouteProp<
  BottomTabsParamList,
  keyof BottomTabsParamList
>;
