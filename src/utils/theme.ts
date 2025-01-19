import { themeType } from "../providers/useThemeProvider";

export const getReversedTheme = (theme: themeType) =>
  theme === "dark" ? "light" : "dark";
