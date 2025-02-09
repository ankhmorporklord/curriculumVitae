import { jsx as _jsx } from "react/jsx-runtime";
import "./index.scss";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "../providers/useThemeProvider";
const IndexPage = () => {
    return (_jsx(ThemeProvider, { children: _jsx(Dashboard, {}) }));
};
export default IndexPage;
