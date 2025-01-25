import React from "react";
import Text from "../Text/Text";
import "./Footer.scss";
import { getReversedTheme } from "../../utils/theme";
import useThemeProvider, {
  themeDetailType,
} from "../../providers/useThemeProvider";

const Footer = () => {
  const { theme, setTheme, setThemeDetail, themeDetail } = useThemeProvider();
  const darkLightMode = theme === "light" ? "DARK MODE" : "LIGHT MODE";
  const reversedTheme = getReversedTheme(theme);

  const Separator = (
    <span className={`footer-separator ${reversedTheme}`}></span>
  );

  const changeThemeDetail = (nextThemeDetail: themeDetailType) => {
    if (themeDetail === nextThemeDetail) setThemeDetail(undefined);
    else setThemeDetail(nextThemeDetail);
  };

  return (
    <span className="footer-layout">
      <div
        className={`footer-option ${themeDetail === "tech" && reversedTheme}`}
      >
        <Text
          text="TECH INFO"
          themeFromParent={themeDetail === "tech" ? reversedTheme : undefined}
          type="subtitle"
          showSquareWrapper
          showSquareWrapperLine={false}
          onClick={() => changeThemeDetail("tech")}
        />
      </div>
      {Separator}
      <Text
        text={darkLightMode}
        type="subtitle"
        showSquareWrapper
        showSquareWrapperLine={false}
        onClick={() => setTheme(reversedTheme)}
      />
      {Separator}
      <div
        className={`footer-option ${themeDetail === "human" && reversedTheme}`}
      >
        <Text
          text="HUMAN INFO"
          themeFromParent={themeDetail === "human" ? reversedTheme : undefined}
          type="subtitle"
          showSquareWrapper
          showSquareWrapperLine={false}
          onClick={() => changeThemeDetail("human")}
        />
      </div>
    </span>
  );
};

export default Footer;
