import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "../Text/Text";
import Photo from "assets/photo.png";
import "./Header.scss";
import { getReversedTheme } from "../../utils/theme";
import useThemeProvider from "../../providers/useThemeProvider";
const Header = ({ name, position }) => {
    const { theme } = useThemeProvider();
    const reversedTheme = getReversedTheme(theme);
    return (_jsxs("div", { className: `layout ${theme}`, children: [_jsxs("span", { className: `texts ${reversedTheme}`, children: [_jsx(Text, { type: "header", text: name, themeFromParent: reversedTheme }), _jsx(Text, { type: "header", text: position, themeFromParent: reversedTheme })] }), _jsx("img", { className: `photo ${reversedTheme}`, src: Photo, alt: "logo", width: "150px", height: "150px" })] }, "header"));
};
export default Header;
