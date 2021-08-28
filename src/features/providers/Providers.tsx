import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { apolloClient } from "./apollo";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <NavigationContainer>{children}</NavigationContainer>
  </ApolloProvider>
);
