import { ApolloProvider } from "@apollo/client";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React, { useMemo } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import { apolloClient } from "./apollo";
import { getTheme } from "./styled-components";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const colorScheme = useColorScheme();

  const navigationTheme = useMemo(
    () => (colorScheme === "dark" ? DarkTheme : DefaultTheme),
    [colorScheme]
  );

  const styledTheme = useMemo(
    () => getTheme(navigationTheme.colors),
    [navigationTheme.colors]
  );

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme}>
          <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
