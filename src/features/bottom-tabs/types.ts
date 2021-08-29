import { Ionicons } from "@expo/vector-icons";

export type BottomTabsParamList = {
  Browse: undefined;
  Profile: undefined;
};

export type TabBarIconMap = {
  [key in keyof BottomTabsParamList]: keyof typeof Ionicons.glyphMap;
};
