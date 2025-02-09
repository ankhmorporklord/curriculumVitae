import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import "./index.scss";
import useThemeProvider from "../providers/useThemeProvider";
import dataJson from "../../data.json";
const Dashboard = () => {
    const { theme } = useThemeProvider();
    // add Header to the second position of the sections
    const { sections, header } = dataJson;
    // @ts-ignore
    const sectionsAndHeader = sections.toSpliced(1, 0, {
        title: "header",
        type: "human",
        info: [],
    });
    return (_jsxs("div", { className: `index-layout ${theme}`, children: [_jsx("div", { className: "index-sections", children: (sectionsAndHeader || []).map((section) => {
                    if (section.title === "header")
                        return _jsx(Header, { ...header });
                    return (_jsx("div", { className: "index-sections-child", children: _jsx(Section, { ...section }) }, section.title));
                }) }), _jsx(Footer, {})] }, "header"));
};
export default Dashboard;
export const DashboardHead = () => _jsx("title", { children: "Dashboard" });
