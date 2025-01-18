import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import "../library.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Data } from "../../gatsby-config";
import Section, { SectionType } from "../components/Section/Section";
import "./index.scss";
import { createContext, useState } from "react";

type themeType = "dark" | "light";
type themeDetailType = "human" | "tech" | undefined;

interface themeContextType {
  theme: themeType;
  themeDetail?: themeDetailType;
  setTheme: (newTheme: themeType) => void;
  setThemeDetail: (newThemeDetail: themeDetailType) => void;
}

const initialContext: themeContextType = {
  theme: "dark",
  themeDetail: undefined,
  setTheme: () => {},
  setThemeDetail: () => {},
};

export const ThemeContext = createContext(initialContext);

const IndexPage: React.FC<PageProps> = ({
  data,
}: {
  data: Data;
  sections: SectionType[];
}) => {
  const [theme, setTheme] = useState<themeType>("dark");
  const [themeDetail, setThemeDetail] = useState<themeDetailType>(undefined);

  const {
    site: {
      siteMetadata: { header, sections },
    },
  } = data || {};
  // add Header to the second position of the sections

  const sectionsAndHeader: SectionType[] = sections.toSpliced(1, 0, {
    title: "header",
    type: "human",
    info: [],
  });

  return (
    <ThemeContext.Provider
      value={theme}
      setTheme={setTheme}
      themeDetail={themeDetail}
      setThemeDetail={setThemeDetail}
    >
      <div className={`index-layout ${theme}`}>
        <div className="index-sections">
          {(sectionsAndHeader || []).map((section: SectionType) => {
            if (section.title === "header") return <Header {...header} />;
            return <Section {...section} />;
          })}
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

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
          info {
            text
            prefix
          }
        }
      }
    }
  }
`;
