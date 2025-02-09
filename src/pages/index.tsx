import * as React from "react";
import "./index.scss";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "../providers/useThemeProvider";
import { PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default IndexPage;
