import { StatusBar } from "expo-status-bar";
import React from "react";

import { Providers } from "./src/features/providers";
import { Routes } from "./src/features/routes";

const App: React.FC = () => (
  <Providers>
    <StatusBar style="auto" />
    <Routes />
  </Providers>
);

export default App;
