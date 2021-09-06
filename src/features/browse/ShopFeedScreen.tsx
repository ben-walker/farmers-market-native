import React from "react";
import { FlatList, ListRenderItem } from "react-native";

import { useGetShopFeedQuery } from "../../graphql-codegen";
import { ScreenContainer } from "../components";
import { ShopFeedItem } from "./ShopFeedItem";
import { ShopFeedQueryItem } from "./types";

export const ShopFeedScreen: React.FC = () => {
  const { data, loading, refetch } = useGetShopFeedQuery();

  const keyExtractor = (shop: ShopFeedQueryItem) => shop.id;

  const onRefresh = () => refetch();

  const renderItem: ListRenderItem<ShopFeedQueryItem> = ({ item }) => (
    <ShopFeedItem shop={item} />
  );

  return (
    <ScreenContainer>
      <FlatList
        data={data?.shops}
        keyExtractor={keyExtractor}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};
