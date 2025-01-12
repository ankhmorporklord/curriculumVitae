import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import '../library.scss';
import Text from '../components/Text/Text';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Data, SectionType } from "../../gatsby-config";
import Section from "../components/Section/Section";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = ({ data }: { data: Data, sections: SectionType[] }) => {

  const { site: { siteMetadata: { header, sections } } } = data || {};
  return (
    <main style={pageStyles}>
      <Header {...header} />
      {(sections || []).map((section: SectionType) =>(
        <Section {...section} />
      ))}
      <Text type="title" text="title" />
      <Text type="header" text="header" />
      <Text type="subtitle" text="subtitle" />
      <Text text="text" />
      <Footer />
    </main>
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
          bold,
          Tag,
        }
      }
    }
  }
}`;