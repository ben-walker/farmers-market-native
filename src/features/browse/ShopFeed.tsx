import { useShopsQuery } from "@generated/graphql-codegen";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ShopFeed = (): JSX.Element => {
  const shopsResult = useShopsQuery();

  const renderItem = () => <></>;

  return (
    <SafeAreaView>
      <FlatList
        data={shopsResult.data?.shops}
        renderItem={renderItem}
        keyExtractor={(shop) => shop.id}
      />
    </SafeAreaView>
  );
};
