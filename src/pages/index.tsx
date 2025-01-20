import * as React from "react";
import "./index.scss";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "../providers/useThemeProvider";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default IndexPage;
