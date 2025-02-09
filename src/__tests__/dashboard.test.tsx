import { render } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import data from "../../data.json";
import { DataJson } from "../types";

describe("<Footer /> component", () => {
  it("renders", () => {
    render(<Dashboard />);
  });
});
