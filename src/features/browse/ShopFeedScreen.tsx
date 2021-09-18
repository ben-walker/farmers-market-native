import React from "react";
import { FlatList, ListRenderItem } from "react-native";

import { Shop, useGetShopFeedQuery } from "../../graphql-codegen";
import { ScreenContainer } from "../components";
import { ShopFeedItem } from "./ShopFeedItem";

export const ShopFeedScreen: React.FC = () => {
  const { data, loading, refetch } = useGetShopFeedQuery({
    variables: { latitude: 40.689266, longitude: -74.044512 }, // TODO: pull device coordinates
  });

  const keyExtractor = (shop: Shop) => shop.id;

  const onRefresh = () => refetch();

  const renderItem: ListRenderItem<Shop> = ({ item }) => (
    <ShopFeedItem shop={item} />
  );

  return (
    <ScreenContainer>
      <FlatList
        data={data?.shopGetNearbyLocations as Shop[]}
        keyExtractor={keyExtractor}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};
