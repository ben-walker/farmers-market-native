import React, { useMemo } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { Shop, useGetShopFeedQuery } from "../../graphql-codegen";
import { ScreenContainer } from "../components";
import { SHOP_FEED_PAGE_SIZE } from "./constants";
import { ShopFeedItem } from "./ShopFeedItem";

export const ShopFeedScreen: React.FC = () => {
  const { data, loading, refetch, fetchMore } = useGetShopFeedQuery({
    variables: {
      // TODO: pull device coordinates
      latitude: 37.333757709349456,
      longitude: -122.01067813108888,
      take: SHOP_FEED_PAGE_SIZE,
    },
  });

  const cursorShopId = useMemo(
    () => data?.shopGetNearbyLocations.slice(-1)[0].id,
    [data?.shopGetNearbyLocations]
  );

  const keyExtractor = (shop: Shop) => shop.id;

  const renderItem: ListRenderItem<Shop> = ({ item }) => (
    <ShopFeedItem key={item.id} shop={item} />
  );

  const onEndReached = async () => {
    await fetchMore({
      variables: {
        skip: 1,
        cursor: {
          id: cursorShopId,
        },
      },
    });
  };

  return (
    <ScreenContainer>
      <FlatList
        data={data?.shopGetNearbyLocations as Shop[]}
        keyExtractor={keyExtractor}
        onRefresh={refetch}
        refreshing={loading}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </ScreenContainer>
  );
};
