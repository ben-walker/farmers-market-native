import React from "react";

import { Providers } from "./src/features/providers";
import { Routes } from "./src/features/routes";

const App = (): JSX.Element => (
  <Providers>
    <Routes />
  </Providers>
);

export default App;
