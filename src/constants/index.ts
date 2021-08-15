import Constants from "expo-constants";

type Environment = {
  graphqlUri: string;
};

export const { graphqlUri } = <Environment>Constants.manifest?.extra;
