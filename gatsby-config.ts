import type { GatsbyConfig } from "gatsby";
import { Header } from "./src/components/Header/Header";
import { TagType } from "./src/components/Text/Text";

export type InfoType = {
  text: string;
  bold?: boolean;
  Tag?: TagType;
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
  siteMetadata: {
    header: {
      name: `Zaquiel Rodriguez`,
      position: `Frontend Developer`
    },
    sections: [{
      title: 'contact',
      info: [
        { text: 'phone: ', bold: true }, { text: '+34 644 40 29 41' },
        { text: 'email: ', bold: true }, { text: 'zaquihex@gmail.com', Tag: 'div' },
        { text: 'github: ', bold: true }, { text: 'https://github.com/ankhmorporklord', Tag: 'div' }
      ]
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
