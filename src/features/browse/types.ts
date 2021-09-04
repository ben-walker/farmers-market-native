import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { GetShopFeedQuery } from "../../graphql-codegen";

export type BrowseStackParamList = {
  ShopFeed: undefined;
  Shop: {
    id: string;
    name: string;
  };
};

export type ShopFeedQueryItem = GetShopFeedQuery["shops"][0];

export type BrowseStackNavigationProp<T extends keyof BrowseStackParamList> =
  NativeStackNavigationProp<BrowseStackParamList, T>;

export type BrowseStackRouteProp<T extends keyof BrowseStackParamList> =
  RouteProp<BrowseStackParamList, T>;
