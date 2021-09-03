import { GetShopFeedQuery } from "../../graphql-codegen";

export type BrowseStackParamList = {
  ShopFeed: undefined;
};

export type ShopFeedQueryItem = GetShopFeedQuery["shops"][0];
