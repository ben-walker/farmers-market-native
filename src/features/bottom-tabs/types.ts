import { RouteProp } from "@react-navigation/native";

export type BottomTabsParamList = {
  Browse: undefined;
  Profile: undefined;
};

export type BottomTabsRouteProp = RouteProp<
  BottomTabsParamList,
  keyof BottomTabsParamList
>;
