import { createContext, ReactNode, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
});

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
    const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<Theme>(
        "theme",
        "dark"
    );
    const [theme, setTheme] = useState<Theme>(localStorageTheme);

    const toggleTheme = () => {
        setLocalStorageTheme(() => {
            return theme === "dark" ? "light" : "dark";
        });
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
};

export { ThemeProvider, useTheme };
export default ThemeContext;
