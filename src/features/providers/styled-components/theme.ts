import { Theme, useTheme } from "@react-navigation/native";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [P in keyof Theme["colors"]]: string;
    };
  }
}

export const useStyledTheme = (): DefaultTheme => {
  const { colors: baseColors } = useTheme();

  return {
    colors: {
      ...baseColors,
    },
  };
};
