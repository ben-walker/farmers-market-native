import { Theme } from "@react-navigation/native";
import { DefaultTheme } from "styled-components/native";

type ThemeColors = Theme["colors"];

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [P in keyof ThemeColors]: string;
    };
  }
}

export const getTheme = (baseColors: ThemeColors): DefaultTheme => ({
  colors: {
    ...baseColors,
  },
});
