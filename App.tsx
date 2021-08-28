import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { Providers } from "./src/features/providers";

const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

const App = (): JSX.Element => (
  <Providers>
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  </Providers>
);

export default App;
