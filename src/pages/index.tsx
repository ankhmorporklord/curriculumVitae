import * as React from "react";
import "./index.scss";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "../providers/useThemeProvider";
import { graphql, PageProps } from "gatsby";
import { Data } from "../../gatsby-config";

const IndexPage: React.FC<PageProps> = ({ data }: { data: Data }) => {
  const {
    site: {
      siteMetadata: { header, sections },
    },
  } = data || {};

  const dataJson = { header, sections };

  return (
    <ThemeProvider>
      <Dashboard dataJson={dataJson} />
    </ThemeProvider>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        header {
          name
          position
        }
        sections {
          title
          type
          info {
            text
            type
            prefix
          }
        }
      }
    }
  }
`;
