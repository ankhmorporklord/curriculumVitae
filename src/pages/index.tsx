import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import '../library.scss';
import Text from '../components/Text/Text';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Data, SectionType } from "../../gatsby-config";
import Section from "../components/Section/Section";
import "./index.scss";
import { useMemo } from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = ({ data }: { data: Data, sections: SectionType[] }) => {

  const { site: { siteMetadata: { header, sections } } } = data || {};

  // add Header to the second position of the sections

  const sectionsAndHeader: SectionType[] =  sections.toSpliced(1, 0, { title: 'header', info: [] });

  return (
    <div style={pageStyles}>

      <div className="sections">
        {(sectionsAndHeader || []).map((section: SectionType) => {
          if (section.title === 'header') return <Header {...header} />
          return (
            <Section {...section} />
          );
        })}
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql `
 query {
  site {
    siteMetadata {
      header {
        name,
        position,
      },
      sections {
        title,
        info {
          text,
          prefix,
        }
      }
    }
  }
}`;