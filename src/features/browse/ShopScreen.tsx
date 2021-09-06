import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";

import { useGetShopQuery } from "../../graphql-codegen";
import { Body, ScreenContainer } from "../components";
import { BrowseStackRouteProp } from "./types";

export const ShopScreen: React.FC = () => {
  const {
    params: { id },
  } = useRoute<BrowseStackRouteProp<"Shop">>();

  const { data } = useGetShopQuery({
    variables: { shopWhere: { id } },
  });

  return (
    <ScreenContainer>
      <ScrollView>
        <Body>Owned by: {data?.shop?.owner.email}</Body>
        <Body>Products</Body>
        {data?.shop?.products.map((product) => (
          <Body key={product.id}>{product.name}</Body>
        ))}
      </ScrollView>
    </ScreenContainer>
  );
};
