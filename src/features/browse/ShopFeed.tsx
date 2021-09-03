import React from "react";
import { FlatList, ListRenderItem } from "react-native";

import { useGetShopFeedQuery } from "../../graphql-codegen";
import { ScreenContainer } from "../layout";
import { ShopFeedItem } from "./ShopFeedItem";
import { ShopFeedQueryItem } from "./types";

export const ShopFeed: React.FC = () => {
  const feedResult = useGetShopFeedQuery();

  const renderItem: ListRenderItem<ShopFeedQueryItem> = ({ item }) => (
    <ShopFeedItem shop={item} />
  );

  const keyExtractor = (shop: ShopFeedQueryItem) => shop.id;

  return (
    <ScreenContainer>
      <FlatList
        data={feedResult.data?.shops}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ScreenContainer>
  );
};
