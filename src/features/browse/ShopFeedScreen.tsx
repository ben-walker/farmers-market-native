import React from "react";
import { FlatList, ListRenderItem } from "react-native";

import { useGetShopFeedQuery } from "../../graphql-codegen";
import { ScreenContainer } from "../components";
import { ShopFeedItem } from "./ShopFeedItem";
import { ShopFeedQueryItem } from "./types";

export const ShopFeedScreen: React.FC = () => {
  const shopFeedResult = useGetShopFeedQuery();

  const renderItem: ListRenderItem<ShopFeedQueryItem> = ({ item }) => (
    <ShopFeedItem shop={item} />
  );

  const keyExtractor = (shop: ShopFeedQueryItem) => shop.id;

  return (
    <ScreenContainer>
      <FlatList
        data={shopFeedResult.data?.shops}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ScreenContainer>
  );
};
