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
    <>
      <Text type="title" text={title} />
      {(info).map(({ text, bold, Tag }) => (
        <Text text={text} bold={Boolean(bold)} Tag={Tag} />
      ))}
    </>
  );
}

export default Section;
