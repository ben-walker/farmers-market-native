import { format } from "date-fns";
import React, { useMemo } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { ShopFeedQueryItem } from "./types";

type ShopFeedItemProps = {
  shop: ShopFeedQueryItem;
};

const TouchableContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  margin: 10px;
  padding: 10px;
`;

export const ShopFeedItem: React.FC<ShopFeedItemProps> = ({ shop }) => {
  const established = useMemo(() => {
    const createdAt = new Date(shop.createdAt);
    const date = format(createdAt, "yyyy");
    return `Established ${date}`;
  }, [shop.createdAt]);

  return (
    <TouchableContainer>
      <Text>{shop.name}</Text>
      <Text>{established}</Text>
    </TouchableContainer>
  );
};
