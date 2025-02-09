import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "classnames";
import "./Text.scss";
import useThemeProvider from "../../providers/useThemeProvider";
import { getReversedTheme } from "../../utils/theme";
const Text = ({ prefix, type = "text", text = "", themeFromParent, showSquareWrapper, showSquareWrapperLine, onClick, }) => {
    const { theme } = useThemeProvider();
    console.log("type: ", type);
    const themeTextToApply = themeFromParent || theme;
    const themeWrapperToApply = themeFromParent
        ? getReversedTheme(themeFromParent || theme)
        : theme;
    const showWrapper = type === "title" || showSquareWrapper;
    console.log("");
    return (_jsxs("div", { className: classes(showWrapper && "wrapper-layout", themeTextToApply, Boolean(onClick) && "clickable", `margin-${type}`), onClick: onClick, children: [prefix && (_jsx("span", { className: classes(type, "text-width", "bold", themeTextToApply), children: prefix })), _jsx("span", { className: classes(type, themeTextToApply, "text-width", showWrapper && `wrapper-square ${themeWrapperToApply}`), children: text }), showWrapper && showSquareWrapperLine !== false && (_jsx("div", { className: classes(`wrapper-line ${themeWrapperToApply}`) }))] }));
};
export default Text;
