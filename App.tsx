import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { graphqlUri } from "./src/env";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: graphqlUri,
});

const App = (): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  </ApolloProvider>
);

const white = "#fff"; // TODO: Global theming

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: white,
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
