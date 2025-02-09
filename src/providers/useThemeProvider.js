import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, } from "react";
const ThemeContext = createContext({});
const useTheme = () => useContext(ThemeContext);
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [themeDetail, setThemeDetail] = useState("human");
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };
    const themeValue = {
        theme,
        themeDetail,
        setTheme: changeTheme,
        setThemeDetail,
    };
    return (_jsx(ThemeContext.Provider, { value: themeValue, children: children }));
};
export { useTheme as default, ThemeProvider };
