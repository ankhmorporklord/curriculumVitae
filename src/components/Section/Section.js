import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "../Text/Text";
import "./Section.scss";
import useThemeProvider from "../../providers/useThemeProvider";
import { getReversedTheme } from "../../utils/theme";
const Section = ({ title, info = [], type }) => {
    const { theme, themeDetail } = useThemeProvider();
    const reversedTheme = getReversedTheme(theme);
    const applyThemeDetail = themeDetail === type;
    return (_jsxs("div", { className: `section-layout ${applyThemeDetail && reversedTheme}`, children: [_jsx(Text, { type: "title", text: title, themeFromParent: applyThemeDetail ? reversedTheme : undefined }), _jsx("div", { className: "section-body", children: info.map((infoArgs) => (_jsx("div", { children: _jsx(Text, { ...infoArgs, type: infoArgs?.type || "text", themeFromParent: applyThemeDetail ? reversedTheme : undefined }) }, Math.random()))) })] }));
};
export default Section;
