import React from 'react';
import Text from '../Text/Text';
import './Section.scss';
import { InfoType } from "../../../gatsby-config";

export type Section = {
  title: string;
  info: InfoType[];
};

const Section = ({ title, info = [] }: Section) => {
  return (
    <div>
      <Text type="title" text={title} />
      <div className="body">
        {(info).map(({ text, prefix }) => (
          <Text text={text} prefix={prefix} />
        ))}
      </div>
    </div>
  );
}

export default Section;
