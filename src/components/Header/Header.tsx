import React from "react";
import Text from "../Text/Text";
import Photo from "../../assets/photo.png";
import "./Header.scss";
import { getReversedTheme } from "../../utils/theme";
import useThemeProvider from "../../providers/useThemeProvider";

export type Header = {
  name: string;
  position: string;
};

const Header = ({ name, position }: Header) => {
  const { theme } = useThemeProvider();
  const reversedTheme = getReversedTheme(theme);
  return (
    <div className={`layout ${theme}`} key="header">
      <span className={`texts ${reversedTheme}`}>
        <Text type="header" text={name} themeFromParent={theme} />
        <Text type="header" text={position} themeFromParent={theme} />
      </span>
      <img
        className={`photo ${reversedTheme}`}
        src={Photo}
        alt="logo"
        width="150px"
        height="150px"
      />
    </div>
  );
};

export default Header;
