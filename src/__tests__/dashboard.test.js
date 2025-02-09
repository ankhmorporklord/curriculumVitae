import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
describe("<Footer /> component", () => {
    it("renders", () => {
        render(_jsx(Dashboard, {}));
    });
});
