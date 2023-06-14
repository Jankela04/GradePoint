import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

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

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<Theme>(
        "theme",
        "dark"
    );
    const [theme, setTheme] = useState<Theme>(localStorageTheme);

    const contextValue = useMemo(() => {
        const toggleTheme = () => {
            setLocalStorageTheme(() => (theme === "dark" ? "light" : "dark"));
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        };
        return { theme, toggleTheme };
    }, [theme, setLocalStorageTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
};

export { ThemeProvider, useTheme };
export default ThemeContext;
