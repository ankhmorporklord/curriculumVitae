import classes from "classnames";
import React, { useContext } from "react";
import "./Text.scss";
import { ThemeContext } from "../../pages";

export type TextType = "header" | "title" | "subtitle" | "text";

interface TextProps {
  prefix?: string;
  text?: string;
  type?: TextType;
  showSquareWrapper?: boolean;
  showSquareWrapperLine?: boolean;
}

const Text = ({
  prefix,
  type = "text",
  text = "",
  showSquareWrapper,
  showSquareWrapperLine,
}: TextProps) => {
  const { theme } = useContext(ThemeContext);

  const themeReversed = theme === "dark" ? "light" : "dark";

  const showWrapper = type === "title" || showSquareWrapper;
  return (
    <>
      <div className={classes(showWrapper && "wrapper-layout", themeReversed)}>
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
    </>
  );
};

export default Text;
