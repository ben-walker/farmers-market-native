import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { apolloClient } from "./src/apollo";

const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

const App = (): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  </ApolloProvider>
);

export default App;
