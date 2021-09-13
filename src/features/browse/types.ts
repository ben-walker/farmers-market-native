import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type BrowseStackParamList = {
  ShopFeed: undefined;
  Shop: {
    id: string;
    name: string;
  };
};

export type BrowseStackNavigationProp<T extends keyof BrowseStackParamList> =
  NativeStackNavigationProp<BrowseStackParamList, T>;

export type BrowseStackRouteProp<T extends keyof BrowseStackParamList> =
  RouteProp<BrowseStackParamList, T>;
