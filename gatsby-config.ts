import type { GatsbyConfig } from "gatsby";
import { Header } from "./src/components/Header/Header";

export type Section = {
  title: string;
  infoLines: string[];
};

export interface Data {
  site: {
    siteMetadata: {
      header: Header
      sections: Section[]
    }
  }
};

const config: GatsbyConfig = {
  siteMetadata: {
    header: {
      name: `Zaquiel Rodriguez`,
      position: `Frontend Developer`
    },
    sections: [{
      title: 'contact',
      infoLines: ['phone: +34 644 40 29 41', 'email: zaquihex@gmail.com', 'github: https://github.com/ankhmorporklord']
    }],
  },
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
