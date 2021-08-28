import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { apolloClient } from "./apollo";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <SafeAreaProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  </ApolloProvider>
);
