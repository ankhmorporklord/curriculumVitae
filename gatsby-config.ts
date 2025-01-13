import type { GatsbyConfig } from "gatsby";
import { Header } from "./src/components/Header/Header";
import data from "./data.json";

export type InfoType = {
  text: string;
  prefix?: string;
}

export type SectionType = {
  title: string;
  info: InfoType[];
};

export interface Data {
  site: {
    siteMetadata: {
      header: Header
      sections: SectionType[]
    }
  }
};

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
  ]
};

export default config;
