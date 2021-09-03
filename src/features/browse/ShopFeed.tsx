import React from "react";
import { FlatList, View } from "react-native";

import { useShopsQuery } from "../../graphql-codegen";

export const ShopFeed: React.FC = () => {
  const shopsResult = useShopsQuery();

  const renderItem = () => <></>;

  return (
    <View>
      <FlatList
        data={shopsResult.data?.shops}
        renderItem={renderItem}
        keyExtractor={(shop) => shop.id}
      />
    </View>
  );
};
