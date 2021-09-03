import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { useGetShopFeedQuery } from "../../graphql-codegen";
import { ShopFeedItem } from "./ShopFeedItem";
import { ShopFeedQueryItem } from "./types";

export const ShopFeed: React.FC = () => {
  const feedResult = useGetShopFeedQuery();

  const renderItem: ListRenderItem<ShopFeedQueryItem> = ({ item }) => (
    <ShopFeedItem shop={item} />
  );

  const keyExtractor = (shop: ShopFeedQueryItem) => shop.id;

  return (
    <View>
      <FlatList
        data={feedResult.data?.shops}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
