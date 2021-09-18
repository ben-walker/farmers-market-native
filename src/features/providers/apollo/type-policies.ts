import { StrictTypedTypePolicies } from "../../../graphql-codegen/apollo-helpers";
import { Existing, Incoming } from "./types";

export const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      shopGetNearbyLocations: {
        keyArgs: false,
        merge: (existing: Existing, incoming: Incoming, { readField }) => {
          const merged = { ...existing };
          incoming.forEach((item) => {
            merged[readField("id", item) as string] = item;
          });
          return merged;
        },
        read: (existing: Existing) => {
          return existing && Object.values(existing);
        },
      },
    },
  },
};
