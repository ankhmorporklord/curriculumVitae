import * as React from "react";
import { HeadFC } from "gatsby";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section, { SectionType } from "../components/Section/Section";
import "./index.scss";
import useThemeProvider from "../providers/useThemeProvider";
import { DataJson } from "../../gatsby-config";

const Dashboard = ({ dataJson }: { dataJson: DataJson }) => {
  const { theme } = useThemeProvider();
  // add Header to the second position of the sections

  const { sections, header } = dataJson;

  // @ts-ignore
  const sectionsAndHeader: SectionType[] = sections.toSpliced(1, 0, {
    title: "header",
    type: "human",
    info: [],
  });

  return (
    <div className={`index-layout ${theme}`} key="header">
      <div className="index-sections">
        {(sectionsAndHeader || []).map((section: SectionType) => {
          if (section.title === "header") return <Header {...header} />;
          return (
            <div className="index-sections-child" key={section.title}>
              <Section {...section} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

export const DashboardHead: HeadFC = () => <title>Dashboard</title>;
