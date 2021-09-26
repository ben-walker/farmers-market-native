import React from "react";

import { ScreenContainer } from "../components";
import { useLocation } from "../location";
import { ShopFeedList } from "./ShopFeedList";

export const ShopFeedScreen: React.FC = () => {
  const { position } = useLocation();

  const { latitude, longitude } = position?.coords || {};

  if (!latitude || !longitude) {
    return null;
  }

  return (
    <ScreenContainer>
      <ShopFeedList latitude={latitude} longitude={longitude} />
    </ScreenContainer>
  );
};
