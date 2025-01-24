import classes from "classnames";
import React, { useContext } from "react";
import "./Text.scss";
import { getReversedTheme } from "../../utils/theme";
import useThemeProvider, { themeType } from "../../providers/useThemeProvider";

export type TextType = "header" | "title" | "subtitle" | "text";

interface TextProps {
  prefix?: string;
  themeFromParent?: themeType;
  text?: string;
  type?: TextType;
  showSquareWrapper?: boolean;
  showSquareWrapperLine?: boolean;
  onClick?: () => void;
}

const Text = ({
  prefix,
  type = "text",
  text = "",
  themeFromParent,
  showSquareWrapper,
  showSquareWrapperLine,
  onClick,
}: TextProps) => {
  const { theme } = useThemeProvider();

  console.log("text - theme: ", theme);

  const themeReversed = themeFromParent || getReversedTheme(theme);

  const showWrapper = type === "title" || showSquareWrapper;
  return (
    <div
      className={classes(
        showWrapper && "wrapper-layout",
        themeReversed,
        Boolean(onClick) && "clickable",
        `padding-${type}`,
      )}
      onClick={onClick}
    >
      {prefix && (
        <span className={classes(type, "text-width", "bold", themeReversed)}>
          {prefix}
        </span>
      )}
      <span
        className={classes(
          type,
          "text-width",
          showWrapper && `wrapper-square ${themeReversed}`,
        )}
      >
        {text}
      </span>

      {showWrapper && showSquareWrapperLine !== false && (
        <div className={classes(`wrapper-line ${themeReversed}`)}></div>
      )}
    </div>
  );
};

export default Text;
