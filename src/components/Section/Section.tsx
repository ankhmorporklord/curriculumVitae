import React from "react";
import Text from "../Text/Text";
import "./Section.scss";
import { InfoType } from "../../../gatsby-config";
import useThemeProvider from "../../providers/useThemeProvider";
import { getReversedTheme } from "../../utils/theme";

export type SectionType = {
  title: string;
  type: "human" | "tech";
  info: InfoType[];
};

const Section = ({ title, info = [], type }: SectionType) => {
  const { theme, themeDetail } = useThemeProvider();
  const reversedTheme = getReversedTheme(theme);

  const applyThemeDetail = themeDetail === type;

  return (
    <div className={`section-layout ${applyThemeDetail && reversedTheme}`}>
      <Text
        type="title"
        text={title}
        themeFromParent={applyThemeDetail ? reversedTheme : undefined}
      />
      <div className="section-body">
        {info.map((infoArgs) => (
          <div key={Math.random()}>
            <Text
              {...infoArgs}
              type={infoArgs?.type || "text"}
              themeFromParent={applyThemeDetail ? reversedTheme : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
