import React, {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useState,
} from "react";

export type themeType = "dark" | "light";
export type themeDetailType = "human" | "tech" | undefined;

export interface themeContextType {
  theme: themeType;
  themeDetail?: themeDetailType;
  setTheme: (newTheme: themeType) => void;
  setThemeDetail: (newThemeDetail: themeDetailType) => void;
}

const ThemeContext = createContext<themeContextType>({} as themeContextType);

const useTheme = (): themeContextType => useContext(ThemeContext);

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<themeType>("dark");
  const [themeDetail, setThemeDetail] = useState<themeDetailType>("human");

  const changeTheme = (newTheme: themeType) => {
    setTheme(newTheme);
  };

  const themeValue: themeContextType = {
    theme,
    themeDetail,
    setTheme: changeTheme,
    setThemeDetail,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export { useTheme as default, ThemeProvider };
