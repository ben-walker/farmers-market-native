import { useRoute } from "@react-navigation/native";
import React from "react";

import { ScreenContainer } from "../components";
import { BrowseStackRouteProp } from "./types";

export const ShopScreen: React.FC = () => {
  const route = useRoute<BrowseStackRouteProp<"Shop">>();

  return <ScreenContainer></ScreenContainer>;
};
