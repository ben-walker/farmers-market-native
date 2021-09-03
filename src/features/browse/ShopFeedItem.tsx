import { getYear } from "date-fns";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ShopFeedQueryItem } from "./types";

type ShopFeedItemProps = {
  shop: ShopFeedQueryItem;
};

export const ShopFeedItem: React.FC<ShopFeedItemProps> = ({ shop }) => {
  const established = useMemo(() => {
    const createdAt = new Date(shop.createdAt);
    const year = getYear(createdAt);
    return `Established ${year}`;
  }, [shop.createdAt]);

  return (
    <TouchableOpacity>
      <View>
        <Text>{shop.name}</Text>
        <Text>{established}</Text>
      </View>
    </TouchableOpacity>
  );
};
