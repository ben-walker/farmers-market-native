import { ApolloClient, InMemoryCache } from "@apollo/client";

import { graphqlUri } from "../../../constants";
import { typePolicies } from "./type-policies";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  uri: graphqlUri,
});
