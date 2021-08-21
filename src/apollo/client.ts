import { ApolloClient, InMemoryCache } from "@apollo/client";

import { graphqlUri } from "../constants";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: graphqlUri,
});
