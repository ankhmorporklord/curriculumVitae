import type { GatsbyConfig } from "gatsby";
import { Header } from "./src/components/Header/Header";
import data from "./data.json";
import { TextType } from "./src/components/Text/Text";
import { SectionType } from "./src/components/Section/Section";

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

const config: GatsbyConfig = {
  siteMetadata: data,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};

export default config;
