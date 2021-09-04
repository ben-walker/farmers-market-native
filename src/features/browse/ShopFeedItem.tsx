import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import React, { useMemo } from "react";
import styled from "styled-components/native";

import { Body } from "../components";
import { BrowseStackNavigationProp, ShopFeedQueryItem } from "./types";

type ShopFeedItemProps = {
  shop: ShopFeedQueryItem;
};

const TouchableContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
`;

export const ShopFeedItem: React.FC<ShopFeedItemProps> = ({ shop }) => {
  const navigation = useNavigation<BrowseStackNavigationProp<"ShopFeed">>();

  const established = useMemo(() => {
    const createdAt = new Date(shop.createdAt);
    const date = format(createdAt, "yyyy");
    return `Established ${date}`;
  }, [shop.createdAt]);

  const navigateToShop = () => navigation.navigate("Shop");

  return (
    <TouchableContainer onPress={navigateToShop}>
      <Body>{shop.name}</Body>
      <Body>{established}</Body>
    </TouchableContainer>
  );
};
