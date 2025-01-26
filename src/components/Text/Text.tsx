import classes from "classnames";
import React from "react";
import "./Text.scss";
import useThemeProvider, { themeType } from "../../providers/useThemeProvider";
import { getReversedTheme } from "../../utils/theme";

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

  console.log("type: ", type);

  const themeTextToApply = themeFromParent || theme;
  const themeWrapperToApply = themeFromParent
    ? getReversedTheme(themeFromParent || theme)
    : theme;

  const showWrapper = type === "title" || showSquareWrapper;

  console.log("");

  return (
    <div
      className={classes(
        showWrapper && "wrapper-layout",
        themeTextToApply,
        Boolean(onClick) && "clickable",
        `margin-${type}`,
      )}
      onClick={onClick}
    >
      {prefix && (
        <span className={classes(type, "text-width", "bold", themeTextToApply)}>
          {prefix}
        </span>
      )}
      <span
        className={classes(
          type,
          themeTextToApply,
          "text-width",
          showWrapper && `wrapper-square ${themeWrapperToApply}`,
        )}
      >
        {text}
      </span>

      {showWrapper && showSquareWrapperLine !== false && (
        <div className={classes(`wrapper-line ${themeWrapperToApply}`)}></div>
      )}
    </div>
  );
};

export default Text;
