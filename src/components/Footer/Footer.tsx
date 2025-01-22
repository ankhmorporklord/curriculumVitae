import React from "react";
import Text from "../Text/Text";
import "./Footer.scss";
import { getReversedTheme } from "../../utils/theme";
import useThemeProvider from "../../providers/useThemeProvider";

const Footer = () => {
  const { theme, setTheme, setThemeDetail, themeDetail } = useThemeProvider();
  const darkLightMode = theme === "light" ? "DARK MODE" : "LIGHT MODE";
  const reversedTheme = getReversedTheme(theme);

  const Separator = (
    <span className={`footer-separator ${reversedTheme}`}></span>
  );

  return (
    <span className="footer-layout">
      <Text
        text="TECH INFO"
        themeFromParent={themeDetail === "tech" ? reversedTheme : undefined}
        type="subtitle"
        showSquareWrapper
        showSquareWrapperLine={false}
        onClick={() => setThemeDetail("tech")}
      />
      {Separator}
      <Text
        text={darkLightMode}
        type="subtitle"
        showSquareWrapper
        showSquareWrapperLine={false}
        onClick={() => setTheme(reversedTheme)}
      />
      {Separator}
      <Text
        text="HUMAN INFO"
        themeFromParent={themeDetail === "human" ? theme : undefined}
        type="subtitle"
        showSquareWrapper
        showSquareWrapperLine={false}
        onClick={() => setThemeDetail("human")}
      />
    </span>
  );
};

export default Footer;
