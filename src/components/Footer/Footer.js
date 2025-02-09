import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "../Text/Text";
import "./Footer.scss";
import { getReversedTheme } from "../../utils/theme";
import useThemeProvider from "../../providers/useThemeProvider";
const Footer = () => {
    const { theme, setTheme, setThemeDetail, themeDetail } = useThemeProvider();
    const darkLightMode = theme === "light" ? "DARK MODE" : "LIGHT MODE";
    const reversedTheme = getReversedTheme(theme);
    const Separator = (_jsx("span", { className: `footer-separator ${reversedTheme}` }));
    const changeThemeDetail = (nextThemeDetail) => {
        if (themeDetail === nextThemeDetail)
            setThemeDetail(undefined);
        else
            setThemeDetail(nextThemeDetail);
    };
    return (_jsxs("span", { className: "footer-layout", children: [_jsx("div", { className: `footer-option ${themeDetail === "tech" && reversedTheme}`, children: _jsx(Text, { text: "TECH INFO", themeFromParent: themeDetail === "tech" ? reversedTheme : undefined, type: "subtitle", showSquareWrapper: true, showSquareWrapperLine: false, onClick: () => changeThemeDetail("tech") }) }), Separator, _jsx(Text, { text: darkLightMode, type: "subtitle", showSquareWrapper: true, showSquareWrapperLine: false, onClick: () => setTheme(reversedTheme) }), Separator, _jsx("div", { className: `footer-option ${themeDetail === "human" && reversedTheme}`, children: _jsx(Text, { text: "HUMAN INFO", themeFromParent: themeDetail === "human" ? reversedTheme : undefined, type: "subtitle", showSquareWrapper: true, showSquareWrapperLine: false, onClick: () => changeThemeDetail("human") }) })] }));
};
export default Footer;
