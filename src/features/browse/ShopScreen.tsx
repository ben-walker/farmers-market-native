import { useRoute } from "@react-navigation/native";
import React from "react";

import { useGetShopQuery } from "../../graphql-codegen";
import { ScreenContainer } from "../components";
import { BrowseStackRouteProp } from "./types";

export const ShopScreen: React.FC = () => {
  const {
    params: { id },
  } = useRoute<BrowseStackRouteProp<"Shop">>();

  const { data } = useGetShopQuery({
    variables: { shopWhere: { id } },
  });

  return <ScreenContainer></ScreenContainer>;
};
