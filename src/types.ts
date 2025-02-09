import data from "../data.json";
import { TextType } from "./components/Text/Text";
import { Header } from "./components/Header/Header";
import { SectionType } from "./components/Section/Section";

export type InfoType = {
  text: string;
  type?: TextType;
  prefix?: string;
};

export interface DataJson {
  header: Header;
  sections: SectionType[];
}

export interface Data {
  site: {
    siteMetadata: DataJson;
  };
}
