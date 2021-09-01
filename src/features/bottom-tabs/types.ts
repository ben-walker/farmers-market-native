import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";

export type BottomTabsParamList = {
  Browse: undefined;
  Profile: undefined;
};

export type BottomTabsRouteProp = RouteProp<
  BottomTabsParamList,
  keyof BottomTabsParamList
>;

export type TabBarIconMap = {
  [key in keyof BottomTabsParamList]: keyof typeof Ionicons.glyphMap;
};
