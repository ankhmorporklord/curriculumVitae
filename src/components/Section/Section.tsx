import React from "react";
import Text from "../Text/Text";
import "./Section.scss";
import { InfoType } from "../../../gatsby-config";

export type SectionType = {
  title: string;
  type: "human" | "tech";
  info: InfoType[];
};

const Section = ({ title, info = [] }: SectionType) => {
  console.log("info", info);
  return (
    <div>
      <Text type="title" text={title} />
      <div className="body">
        {info.map((infoArgs) => (
          <Text {...infoArgs} />
        ))}
      </div>
    </div>
  );
};

export default Section;
