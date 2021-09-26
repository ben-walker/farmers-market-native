import React, { useCallback, useMemo } from "react";
import { FlatList, ListRenderItem } from "react-native";

import {
  GetShopFeedQueryVariables,
  Shop,
  useGetShopFeedQuery,
} from "../../graphql-codegen";
import { SHOP_FEED_PAGE_SIZE } from "./constants";
import { ShopFeedItem } from "./ShopFeedItem";

type ShopFeedListProps = Pick<
  GetShopFeedQueryVariables,
  "latitude" | "longitude"
>;

export const ShopFeedList: React.FC<ShopFeedListProps> = ({
  latitude,
  longitude,
}) => {
  const { data, loading, refetch, fetchMore } = useGetShopFeedQuery({
    variables: {
      latitude,
      longitude,
      take: SHOP_FEED_PAGE_SIZE,
    },
  });

  const cursorShopId = useMemo(
    () => data?.shopGetNearbyLocations.slice(-1)[0].id,
    [data?.shopGetNearbyLocations]
  );

  const keyExtractor = useCallback((shop: Shop) => shop.id, []);

  const renderItem: ListRenderItem<Shop> = useCallback(
    ({ item }) => <ShopFeedItem key={item.id} shop={item} />,
    []
  );

  const onEndReached = useCallback(async () => {
    await fetchMore({
      variables: {
        skip: 1,
        cursor: {
          id: cursorShopId,
        },
      },
    });
  }, [cursorShopId, fetchMore]);

  return (
    <FlatList
      data={data?.shopGetNearbyLocations as Shop[]}
      keyExtractor={keyExtractor}
      onRefresh={refetch}
      refreshing={loading}
      renderItem={renderItem}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};
