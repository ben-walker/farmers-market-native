import React from "react";

import { Routes } from "./src/features/navigation";
import { Providers } from "./src/features/providers";

const App = (): JSX.Element => (
  <Providers>
    <Routes />
  </Providers>
);

export default App;
